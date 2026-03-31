import homePage from './homePage'
import engineeringDayPage from './engineeringDayPage'
import { type SchemaTypeDefinition } from 'sanity'
import partner from './partner'
import programmeItem, { programmeSubItem } from './programmeItem'
import masterclass from './masterclass'
import speaker from './speaker'
import sessionGroup from './sessionGroup'
import attendingHeroesPage from './attendingHeroesPage'

export const schema: { types: SchemaTypeDefinition[] } = {
 types: [partner, programmeItem, programmeSubItem, masterclass, engineeringDayPage, homePage, speaker, sessionGroup, attendingHeroesPage],
}