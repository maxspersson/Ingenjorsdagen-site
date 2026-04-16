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
      name: 'showDescription',
      title: 'Show description',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      hidden: ({ parent }) => parent?.showDescription === false,
    }),

    defineField({
      name: 'showDetails',
      title: 'Show details section',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'detailsLabel',
      title: 'Details label',
      type: 'string',
      description: 'For example SESSION DETAILS or PANEL DETAILS',
      hidden: ({ parent }) => parent?.showDetails === false,
    }),
    defineField({
      name: 'detailsText',
      title: 'Details text',
      type: 'text',
      rows: 5,
      hidden: ({ parent }) => parent?.showDetails === false,
    }),

    defineField({
      name: 'showSubItems',
      title: 'Show sub items',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'subItems',
      title: 'Sub items',
      type: 'array',
      of: [{ type: 'programmeSubItem' }],
      hidden: ({ parent }) => parent?.showSubItems === false,
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