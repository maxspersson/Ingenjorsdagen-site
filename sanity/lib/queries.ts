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

export const engineeringDayPageQuery = groq`
  *[_type == "engineeringDayPage"][0]{
    hero{
      dateText,
      title,
      subtitle,
      ctaText,
      ctaHref,
      mediaType,
      image{
        alt,
        asset
      },
      videoUrl
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
      secondaryCtaHref,
      mediaType,
      image{
        alt,
        asset
      },
      videoUrl
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

export const attendingHeroesPageQuery = groq`
  *[_type == "attendingHeroesPage"][0]{
    _id,
    internalTitle,
    hero{
      kicker,
      title,
      subtitle,
      mediaType,
      image{
        alt,
        asset
      },
      videoUrl
    },
    featuredSection{
      label,
      title,
      intro
    },
    moderatorSection{
      label,
      title,
      intro
    },
    heroTalksSection{
      label,
      title,
      intro
    },
    panelsSection{
      label,
      title,
      intro
    },
    firesidesSection{
      label,
      title,
      intro
    },
    masterclassesSection{
      label,
      title,
      intro
    },
    keynoteSection{
      label,
      title,
      intro
    }
  }
`

export const speakersQuery = groq`
  *[_type == "speaker"] | order(order asc){
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
`

export const sessionGroupsQuery = groq`
  *[_type == "sessionGroup"] | order(order asc){
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
  }
`

export const grandPrizePageQuery = `
{
  "page": *[_type == "grandPrizePage"][0]{
    hero{
      eyebrow,
      title,
      text,
      mediaType,
      image{
        alt,
        asset
      },
      videoUrl
    },
    whySection,
    whoSection,
    categoriesSection,
    categories,
    jurySection,
    bottomSection
  },
  "juryMembers": *[_type == "juryMember"] | order(sortOrder asc){
    name,
    title,
    company,
    "image": {
      "asset": {
        "url": image.asset->url
      }
    }
  }
}
`;

export const preEventsPageQuery = groq`
  *[_type == "preEventsPage"][0]{
    hero{
      eyebrow,
      title,
      subtitle,
      mediaType,
      videoUrl,
      image{
        asset->{
          _id,
          url
        },
        alt
      }
    },
    whySection,
    whatToExpectSection,
    expectationCards,
    upcomingStopsSection,
    cityCards,
    closingSection{
      title,
      body1,
      body2,
      body3,
      mediaType,
      videoUrl,
      image{
        asset->{
          _id,
          url
        }
      }
    }
  }
`

export const preEventsCityQuery = groq`
  *[_type == "preEventsCity" && slug.current == $slug][0]{
    hero{
      eyebrow,
      title,
      subtitle,
      mediaType,
      videoUrl,
      image{
        asset->{
          _id,
          url
        },
        alt
      }
    },
    facts,
    content
  }
`

export const contactPageQuery = groq`
  *[_type == "contactPage"][0]{
    internalTitle,
    hero{
      label,
      title,
      subtitle,
      intro,
      mediaType,
      image{
        alt,
        asset
      },
      videoUrl
    },
    contactItems[]{
      label,
      email,
      text
    }
  }
`
export const grandPrizeCategoryPageQuery = groq`
  *[_type == "grandPrizeCategoryPage" && slug.current == $slug][0]{
    hero{
      mediaType,
      videoUrl,
      image{
        asset->{
          _id,
          url
        },
        alt
      }
    },
    whySection,
    whoSection,
    criteriaSection,
    criteriaItems,
    hallOfFameSection,
    featuredWinner{
      eyebrow,
      winner,
      presentedBy,
      summary,
      secondaryText
    },
    hallOfFameItems[]{
      year,
      winner,
      presentedBy,
      summary,
      secondaryText
    }
  }
`