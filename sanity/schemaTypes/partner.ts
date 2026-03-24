import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'url',
      title: 'Website URL',
      type: 'url',
    }),

    defineField({
      name: 'tier',
      title: 'Tier',
      type: 'string',
      options: {
        list: [
          { title: 'Founding Partner', value: 'founding' },
          { title: 'Partner', value: 'partner' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 100,
    }),

    // 👇 NYTT FÄLT (viktigt för designen)
    defineField({
      name: 'logoVariant',
      title: 'Logo variant',
      type: 'string',
      options: {
        list: [
          { title: 'Normal', value: 'normal' },
          { title: 'Wide', value: 'wide' },
          { title: 'Compact', value: 'compact' },
        ],
        layout: 'radio',
      },
      initialValue: 'normal',
    }),

    // 👇 (valfri men bra)
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      description: 'Optional. Used for accessibility. Defaults to name.',
    }),
  ],
})