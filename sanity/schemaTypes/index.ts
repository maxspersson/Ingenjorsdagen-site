import { type SchemaTypeDefinition } from 'sanity'

import seo from './seo'

import homePage from './homePage'
import engineeringDayPage from './engineeringDayPage'
import partner from './partner'
import programmeItem, { programmeSubItem } from './programmeItem'
import masterclass from './masterclass'
import speaker from './speaker'
import sessionGroup from './sessionGroup'
import attendingHeroesPage from './attendingHeroesPage'
import grandPrizePage from './grandPrizePage'
import juryMember from './juryMember'
import preEventsPage from './preEventsPage'
import preEventsCity from './preEventsCity'
import contactPage from './contactPage'
import grandPrizeCategoryPage from './grandPrizeCategoryPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    seo, // 👈 viktigt att denna ligger här

    partner,
    programmeItem,
    programmeSubItem,
    masterclass,
    engineeringDayPage,
    homePage,
    speaker,
    sessionGroup,
    attendingHeroesPage,
    grandPrizePage,
    juryMember,
    preEventsPage,
    preEventsCity,
    contactPage,
    grandPrizeCategoryPage,
  ],
}