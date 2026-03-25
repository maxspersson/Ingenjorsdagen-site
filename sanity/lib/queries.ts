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
  *[_type == "homePage"][0]
`