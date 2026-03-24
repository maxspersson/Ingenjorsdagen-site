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