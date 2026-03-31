import { groq } from 'next-sanity'

export const partnersQuery = groq`
  *[_type == "partner"] | order(order asc) {
    _id,
    name,
    url,
    tier,
    order,
    logoVariant,
    alt,
    logo {
      asset->{
        _id,
        url
      }
    }
  }
`

export const programmeQuery = groq`
  *[_type == "programmeItem"] | order(order asc) {
    id,
    time,
    title,
    description,
    detailsLabel,
    detailsText,
    subItems[] {
      time,
      title,
      meta
    }
  }
`
export const masterclassesQuery = groq`
  *[_type == "masterclass"] | order(order asc) {
    _id,
    order,
    kicker,
    title,
    speaker,
    role,
    company,
    image {
      asset->{
        url
      }
    },
    avatar {
      asset->{
        url
      }
    },
    details
  }
`
export const engineeringDayPageQuery = `
  *[_type == "engineeringDayPage"][0]{
    hero{
      dateText,
      title,
      subtitle,
      ctaText,
      ctaHref
    },
    themeSection{
      kicker,
      title,
      subtitle,
      body
    },
    masterclassesIntro{
      title,
      body
    },
    programmeIntro{
      title,
      body
    }
  }
`
export const homePageQuery = `
  *[_type == "homePage"][0]{
    hero{
      kicker,
      title,
      subtitle,
      primaryCtaText,
      primaryCtaHref,
      secondaryCtaText,
      secondaryCtaHref
    },
    "foundation": foundationSection{
      kicker,
      title,
      "body": introText,
      "pillars": [
        pillarOne{
          number,
          title,
          body
        },
        pillarTwo{
          number,
          title,
          body
        },
        pillarThree{
          number,
          title,
          body
        }
      ]
    },
    "whyItMatters": whyItMattersSection{
      kicker,
      title,
      "points": [
        {
          "body": leftText
        },
        {
          "body": rightText
        }
      ]
    },
    foundingPartnersSection{
      kicker
    }
  }
`;

export const attendingHeroesPageQuery = `
  *[_type == "attendingHeroesPage"][0]{
    hero,
    featuredSection,
    moderatorSection,
    heroTalksSection,
    panelsSection,
    firesidesSection,
    masterclassesSection,
    keynoteSection
  }
`;
export const speakersQuery = `*[_type == "speaker"] | order(order asc){
  name,
  title,
  company,
  cardLabel,
  placements,
  session,
  focus,
  bio,
  order,
  "image": image.asset->url
}`;

export const sessionGroupsQuery = `*[_type == "sessionGroup"] | order(order asc){
  title,
  description,
  type,
  order,
  people[]->{
    name,
    title,
    company,
    cardLabel,
    placements,
    session,
    focus,
    bio,
    order,
    "image": image.asset->url
  }
}`;
export const grandPrizePageQuery = `
  *[_type == "grandPrizePage"][0]{
    hero,
    whySection,
    whoSection,
    categoriesSection,
    categories,
    jurySection,
    juryMembers,
    bottomSection
  }
`;
