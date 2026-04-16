import { createClient } from "@sanity/client";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2026-03-20",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const masterclasses = [
  {
    _id: "masterclass-1",
    _type: "masterclass",
    order: 1,
    kicker: "MASTERCLASS #1 – ENERGIMYNDIGHETEN",
    title:
      "Powering the Future: Engineering the Next Generation of Energy Systems",
    speaker: "TBA",
    role: "TBA",
    company: "Energimyndigheten",
    imageUrl: "https://i.imgur.com/E1HQ3Q1.jpeg",
    avatarUrl: "https://i.imgur.com/3e7Qg0A.png",
    details: [
      {
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "In this masterclass, experts from the Swedish Energy Agency will explore how modern energy systems are evolving to support a fossil-free society. The session will highlight how electrification, smart grids, and digital technologies are reshaping the way energy is produced, distributed, and consumed.",
            marks: [],
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Participants will gain insights into the engineering challenges behind integrating renewable energy sources, balancing grid stability, and developing scalable energy infrastructure for the future.",
            marks: [],
          },
        ],
      },
      {
        _type: "block",
        style: "h3",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Learnings",
            marks: [],
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        level: 1,
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "How renewable energy sources are integrated into modern power systems.",
            marks: [],
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        level: 1,
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Key engineering challenges in maintaining grid stability in electrified societies.",
            marks: [],
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        level: 1,
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "The role of digital technologies and smart grids in future energy systems.",
            marks: [],
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        level: 1,
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Practical examples of system design for scalable and resilient energy infrastructure.",
            marks: [],
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          { _type: "span", text: "Target audience: ", marks: ["strong"] },
          {
            _type: "span",
            text: "This masterclass is aimed at engineers working with energy systems, electrical infrastructure or electrification.",
            marks: [],
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          { _type: "span", text: "Language: ", marks: ["strong"] },
          { _type: "span", text: "Swedish", marks: [] },
        ],
      },
      {
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          { _type: "span", text: "Time: ", marks: ["strong"] },
          { _type: "span", text: "11:45–12:30", marks: [] },
        ],
      },
    ],
  },
  {
    _id: "masterclass-2",
    _type: "masterclass",
    order: 2,
    kicker: "MASTERCLASS #2 – VAROPREEM",
    title:
      "From Refinery to Renewable: Engineering the Future of Liquid Fuels",
    speaker: "TBA",
    role: "TBA",
    company: "VAROPreem",
    imageUrl: "https://i.imgur.com/uTmIYDa.jpeg",
    avatarUrl: "https://i.imgur.com/3e7Qg0A.png",
    details: [
      {
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Engineers from VAROPreem will explore how refinery infrastructure can be transformed to support renewable fuels and low-carbon energy systems.",
            marks: [],
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          { _type: "span", text: "Language: ", marks: ["strong"] },
          { _type: "span", text: "English", marks: [] },
        ],
      },
      {
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          { _type: "span", text: "Time: ", marks: ["strong"] },
          { _type: "span", text: "11:45–12:30", marks: [] },
        ],
      },
    ],
  },
  {
    _id: "masterclass-3",
    _type: "masterclass",
    order: 3,
    kicker: "MASTERCLASS #3 – TBA",
    title: "TBA",
    speaker: "TBA",
    role: "TBA",
    company: "",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
    avatarUrl: "https://i.imgur.com/5r0gkLr.png",
    details: [
      {
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Description coming soon.",
            marks: [],
          },
        ],
      },
    ],
  },
  {
    _id: "masterclass-4",
    _type: "masterclass",
    order: 4,
    kicker: "MASTERCLASS #4 – TBA",
    title: "TBA",
    speaker: "TBA",
    role: "TBA",
    company: "",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop",
    avatarUrl: "https://i.imgur.com/5r0gkLr.png",
    details: [
      {
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            text: "Description coming soon.",
            marks: [],
          },
        ],
      },
    ],
  },
];

async function uploadImageFromUrl(url, filename) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${url}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return client.assets.upload("image", buffer, { filename });
}

async function run() {
  for (const item of masterclasses) {
    console.log(`Seeding ${item.title}...`);

    const imageAsset = await uploadImageFromUrl(
      item.imageUrl,
      `${item._id}-image.jpg`
    );
    const avatarAsset = await uploadImageFromUrl(
      item.avatarUrl,
      `${item._id}-avatar.jpg`
    );

    await client.createOrReplace({
      _id: item._id,
      _type: "masterclass",
      order: item.order,
      kicker: item.kicker,
      title: item.title,
      speaker: item.speaker,
      role: item.role,
      company: item.company,
      image: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: imageAsset._id,
        },
      },
      avatar: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: avatarAsset._id,
        },
      },
      details: item.details,
    });
  }

  console.log("Done! All masterclasses seeded.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});