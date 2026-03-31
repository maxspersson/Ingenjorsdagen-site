import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'sessionGroup',
  title: 'Session Group',
  type: 'document',

  fields: [
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
      rows: 4,
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Panel', value: 'panel' },
          { title: 'Fireside', value: 'fireside' },
          { title: 'Masterclass', value: 'masterclass' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'people',
      title: 'People',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'speaker' }],
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
    },
  },
})