import { type SchemaTypeDefinition } from 'sanity'
import partner from './partner'
import programmeItem, { programmeSubItem } from './programmeItem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [partner, programmeItem, programmeSubItem],
}