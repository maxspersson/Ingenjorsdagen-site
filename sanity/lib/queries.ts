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

export const programmeQuery = `*[_type == "programmeItem"] | order(order asc) {
  id,
  time,
  title,

  showDescription,
  description,

  showDetails,
  detailsLabel,
  detailsText,

  showSubItems,
  subItems[]{
    time,
    title,
    meta
  }
}`

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
{
  "page": *[_type == "engineeringDayPage"][0]{
    _id,
    internalTitle,
    seo{
      title,
      description,
      ogTitle,
      ogDescription,
      noIndex,
      ogImage{
        alt,
        asset->{
          url
        }
      }
    },
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
  },

  "partners": *[_type == "partner"] | order(order asc) {
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
  },

  "programme": *[_type == "programmeItem"] | order(order asc) {
    id,
    order,
    time,
    title,
    showDescription,
    description,
    showDetails,
    detailsLabel,
    detailsText,
    showSubItems,
    subItems[]{
      time,
      title,
      meta
    }
  },

  "masterclasses": *[_type == "masterclass"] | order(order asc) {
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
}
`;

export const homePageQuery = `
  *[_type == "homePage"][0]{
    seo{
      title,
      description,
      ogTitle,
      ogDescription,
      noIndex,
      ogImage{
        alt,
        asset->{
          url
        }
      }
    },
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
    seo{
      title,
      description,
      ogTitle,
      ogDescription,
      noIndex,
      ogImage{
        alt,
        asset->{
          url
        }
      }
    },
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
  *[_type == "speaker" && visible == true] | order(order asc){
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
    "people": people[@->visible == true]->{
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
  seo{
    title,
    description,
    ogTitle,
    ogDescription,
    noIndex,
    ogImage{
      alt,
      asset->{
        url
      }
    }
  },
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
  "juryMembers": *[_type == "juryMember" && visible == true] | order(sortOrder asc){
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
    internalTitle,
    seo{
      title,
      description,
      ogTitle,
      ogDescription,
      noIndex,
      ogImage{
        alt,
        asset->{
          url
        }
      }
    },
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
    seo{
      title,
      description,
      ogTitle,
      ogDescription,
      noIndex,
      ogImage{
        alt,
        asset->{
          url
        }
      }
    },
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
    seo{
      title,
      description,
      ogTitle,
      ogDescription,
      noIndex,
      ogImage{
        alt,
        asset->{
          url
        }
      }
    },
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
    seo{
      title,
      description,
      ogTitle,
      ogDescription,
      noIndex,
      ogImage{
        alt,
        asset->{
          url
        }
      }
    },
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
    whySection{
      "eyebrow": label,
      title,
      "subtitle": intro,
      "body": coalesce(body1, "") + "\n\n" + coalesce(body2, "") + "\n\n" + coalesce(body3, "")
    },
    whoSection{
      "eyebrow": label,
      title,
      "subtitle": intro,
      "body": coalesce(body1, "") + "\n\n" + coalesce(body2, "") + "\n\n" + coalesce(body3, "")
    },
    criteriaSection{
      "eyebrow": label,
      title,
      "subtitle": intro
    },
    criteriaItems,
    hallOfFameSection{
      "eyebrow": label,
      title,
      "subtitle": intro
    },
    featuredWinner{
      "label": eyebrow,
      year,
      winner,
      presentedBy,
      summary,
      "jury": secondaryText
    },
    hallOfFameItems[]{
      year,
      winner,
      presentedBy,
      summary,
      "jury": secondaryText
    }
  }
`