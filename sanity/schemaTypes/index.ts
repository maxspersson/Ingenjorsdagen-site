import homePage from './homePage'
import engineeringDayPage from './engineeringDayPage'
import { type SchemaTypeDefinition } from 'sanity'
import partner from './partner'
import programmeItem, { programmeSubItem } from './programmeItem'
import masterclass from './masterclass'

export const schema: { types: SchemaTypeDefinition[] } = {
 types: [partner, programmeItem, programmeSubItem, masterclass, engineeringDayPage, homePage],
}