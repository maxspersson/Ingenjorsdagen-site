import { defineType, defineField } from 'sanity'

export const programmeSubItem = defineType({
  name: 'programmeSubItem',
  title: 'Programme sub item',
  type: 'object',
  fields: [
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'meta',
      title: 'Meta',
      type: 'string',
    }),
  ],
})

const programmeItem = defineType({
  name: 'programmeItem',
  title: 'Programme item',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      description: 'Unique id used by the frontend, for example hero-talks-1',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Controls the order in the programme list',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'detailsLabel',
      title: 'Details label',
      type: 'string',
      description: 'For example SESSION DETAILS or PANEL DETAILS',
    }),
    defineField({
      name: 'detailsText',
      title: 'Details text',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'subItems',
      title: 'Sub items',
      type: 'array',
      of: [{ type: 'programmeSubItem' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'time',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Untitled programme item',
        subtitle: subtitle ? `${subtitle}` : 'No time set',
      }
    },
  },
})

export default programmeItem