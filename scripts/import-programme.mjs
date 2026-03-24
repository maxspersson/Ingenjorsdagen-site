import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-03-24',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const programme = [
  {
    id: "registration-masterclass",
    time: "11:30",
    title: "MASTERCLASS REGISTRATION OPENS",
    description: "Check-in for Masterclass participants only.",
    order: 1,
  },
  {
    id: "masterclasses",
    time: "11:45",
    title: "MASTERCLASSES",
    description: "Limited seats. Pre-registration required.",
    order: 2,
  },
  {
    id: "registration-networking",
    time: "12:00",
    title: "REGISTRATION & NETWORKING",
    description: "Doors open for all participants.",
    order: 3,
  },
  {
    id: "opening-remarks",
    time: "13:00",
    title: "OPENING REMARKS",
    description: "Welcome to Engineering Day 2026.",
    order: 4,
  },
  {
    id: "hero-talks-1",
    time: "13:05",
    title: "HERO TALKS",
    description:
      "Three consecutive talks from engineering leaders working at the forefront of industrial transformation.",
    detailsLabel: "SESSION DETAILS",
    detailsText:
      "This block consists of three individual talks presented in sequence. Speaker names, titles, portraits and talk descriptions can be added here later without changing the overall structure of the programme.",
    subItems: [
      {time: "13:05", title: "Preem", meta: "TBA"},
      {time: "13:20", title: "Saab", meta: "TBA"},
      {time: "13:35", title: "Skanska", meta: "TBA"},
    ],
    order: 5,
  },
  {
    id: "panel-discussion-1",
    time: "13:50",
    title: "PANEL DISCUSSION",
    description: "TBA",
    detailsLabel: "PANEL DETAILS",
    detailsText:
      "A moderated panel conversation. This area is prepared for speakers, roles, participating organisations and a short editorial framing of the discussion.",
    order: 6,
  },
  {
    id: "networking-break-1",
    time: "14:05",
    title: "NETWORKING BREAK",
    description: "Coffee, snacks and networking.",
    order: 7,
  },
  {
    id: "hero-talks-2",
    time: "14:35",
    title: "HERO TALKS",
    description:
      "A second sequence of focused talks highlighting applied engineering in practice.",
    detailsLabel: "SESSION DETAILS",
    detailsText:
      "As above, these are sequential talks within one programme block. The structure leaves room for later expansion with full speaker content while keeping the overview calm and premium.",
    subItems: [
      {time: "14:35", title: "Trafikverket", meta: "TBA"},
      {time: "14:50", title: "Sweco", meta: "TBA"},
    ],
    order: 8,
  },
  {
    id: "fireside-chat",
    time: "15:05",
    title: "FIRESIDE CHAT",
    description:
      "Two consecutive conversations exploring what engineering leadership looks like in a time of intelligent systems.",
    detailsLabel: "CONVERSATION DETAILS",
    detailsText:
      "This slot contains two separate fireside conversations in sequence, not one combined session. The expandable area is prepared for moderator, participants and editorial talk descriptions.",
    subItems: [
      {time: "15:05", title: "Fireside Chat 1", meta: "TBA"},
      {time: "15:20", title: "Fireside Chat 2", meta: "TBA"},
    ],
    order: 9,
  },
  {
    id: "networking-break-2",
    time: "15:35",
    title: "NETWORKING BREAK",
    description: "Coffee, snacks and networking.",
    order: 10,
  },
  {
    id: "panel-discussion-2",
    time: "16:05",
    title: "PANEL DISCUSSION",
    description: "TBA",
    detailsLabel: "PANEL DETAILS",
    detailsText:
      "Prepared for a larger panel format with room for multiple participants, affiliations and a concise framing of the topic.",
    order: 11,
  },
  {
    id: "keynote",
    time: "16:20",
    title: "KEYNOTE",
    description: "TBA",
    detailsLabel: "KEYNOTE DETAILS",
    detailsText:
      "Reserved for keynote speaker profile, title, organisation and session abstract.",
    order: 12,
  },
  {
    id: "award-ceremony",
    time: "16:50",
    title: "AWARD CEREMONY",
    description: "The Grand Prize for Engineering.",
    order: 13,
  },
  {
    id: "celebration",
    time: "17:30",
    title: "LET’S CELEBRATE ENGINEERING!",
    description:
      "Enjoy an evening of networking, music, delicious bites and bubbly drinks as we celebrate engineering.",
    order: 14,
  },
]

async function run() {
  for (const item of programme) {
    await client.createOrReplace({
      _id: `programmeItem.${item.id}`,
      _type: 'programmeItem',
      ...item,
    })
    console.log(`Imported: ${item.id}`)
  }

  console.log('Done! Programme imported to Sanity.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})