import dotenv from "dotenv";
import { createClient } from "@sanity/client";

dotenv.config({ path: ".env.local" });

console.log("PROJECT ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log("DATASET:", process.env.NEXT_PUBLIC_SANITY_DATASET);

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2026-03-20",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function run() {
  const docs = await client.fetch(`
    *[_type == "programmeItem"]{
      _id,
      _type,
      id,
      order,
      time,
      title,
      description,
      detailsLabel,
      detailsText,
      subItems
    }
  `);

  console.log(`Found ${docs.length} programmeItem docs`);

  for (const doc of docs) {
    if (!doc.id) {
      console.log(`Skipping ${doc._id} because it has no id field`);
      continue;
    }

    const targetId = doc.id;

    if (doc._id === targetId) {
      console.log(`OK already public: ${doc._id}`);
      continue;
    }

    const existing = await client.getDocument(targetId);

    if (existing) {
      console.log(`Exists already, skipping create: ${targetId}`);
      continue;
    }

    const newDoc = {
      _id: targetId,
      _type: "programmeItem",
      id: doc.id,
      order: doc.order,
      time: doc.time,
      title: doc.title,
      description: doc.description,
      detailsLabel: doc.detailsLabel,
      detailsText: doc.detailsText,
      subItems: doc.subItems,
    };

    await client.create(newDoc);
    console.log(`Created ${targetId} from ${doc._id}`);
  }

  console.log("Done");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});