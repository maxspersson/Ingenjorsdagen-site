import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'speaker',
  title: 'Speaker',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'visible',
      title: 'Visible on site',
      type: 'boolean',
      description: 'Turn on when this speaker should be shown on the website.',
      initialValue: false,
    }),
    defineField({
      name: 'title',
      title: 'Job title',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'cardLabel',
      title: 'Card label',
      type: 'string',
      options: {
        list: [
          { title: 'Featured', value: 'Featured' },
          { title: 'Moderator', value: 'Moderator' },
          { title: 'Hero Talk', value: 'Hero Talk' },
          { title: 'Panel', value: 'Panel' },
          { title: 'Fireside', value: 'Fireside' },
          { title: 'Masterclass', value: 'Masterclass' },
          { title: 'Keynote', value: 'Keynote' },
        ],
      },
    }),
    defineField({
      name: 'placements',
      title: 'Placements',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Featured', value: 'featured' },
          { title: 'Moderator', value: 'moderator' },
          { title: 'Hero Talks', value: 'heroTalks' },
          { title: 'Keynote', value: 'keynote' },
        ],
      },
    }),
    defineField({
      name: 'session',
      title: 'Session name',
      type: 'string',
    }),
    defineField({
      name: 'focus',
      title: 'Focus',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
      media: 'image',
    },
  },
})