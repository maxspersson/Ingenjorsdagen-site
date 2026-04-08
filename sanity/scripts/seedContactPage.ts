import dotenv from "dotenv";
import { createClient } from "next-sanity";

dotenv.config({ path: ".env.local" });

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2026-03-20",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const contactPageSeed = {
  internalTitle: "Contact Page",
  hero: {
    label: "CONTACT",
    title: "Get in touch",
    subtitle: "Questions about Engineering Day, partnerships or participation.",
    intro:
      "Whether you would like to learn more about Engineering Day, explore a partnership or get in touch with the team, we are happy to hear from you.",
  },
  contactItems: [
    {
      label: "General inquiries",
      email: "info@ingenjorsdagen.se",
      text: "For general questions about Engineering Day, participation, programme information or the event platform.",
    },
    {
      label: "Partnerships & collaborations",
      email: "linus.persson@nyteknikgroup.se",
      text: "For partnership opportunities, collaborations and conversations related to Engineering Day and The Grand Prize for Engineering.",
    },
  ],
};

async function upsertContactPage() {
  const existing = await writeClient.fetch(
    `*[_type == "contactPage"][0]{ _id }`
  );

  const doc = {
    _type: "contactPage",
    internalTitle: contactPageSeed.internalTitle,
    hero: contactPageSeed.hero,
    contactItems: contactPageSeed.contactItems,
  };

  if (existing?._id) {
    await writeClient.patch(existing._id).set(doc).commit();
    console.log("Contact Page updated");
    return;
  }

  await writeClient.create(doc);
  console.log("Contact Page created");
}

async function run() {
  await upsertContactPage();
  console.log("Done seeding Contact Page.");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});