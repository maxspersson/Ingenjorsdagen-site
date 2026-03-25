import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'engineeringDayPage',
  title: 'Engineering Day Page',
  type: 'document',

  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal title (only for CMS)',
      type: 'string',
    }),

    // HERO
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'dateText',
          title: 'Date text',
          type: 'string',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'ctaText',
          title: 'CTA text',
          type: 'string',
        }),
        defineField({
          name: 'ctaHref',
          title: 'CTA link',
          type: 'string',
        }),
      ],
    }),

    // THEME SECTION
    defineField({
      name: 'themeSection',
      title: 'Theme section',
      type: 'object',
      fields: [
        defineField({
          name: 'kicker',
          title: 'Kicker',
          type: 'string',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'array',
          of: [{ type: 'block' }],
        }),
      ],
    }),

    // MASTERCLASSES INTRO
    defineField({
      name: 'masterclassesIntro',
      title: 'Masterclasses intro',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'array',
          of: [{ type: 'block' }],
        }),
      ],
    }),

    // PROGRAMME INTRO
    defineField({
      name: 'programmeIntro',
      title: 'Programme intro',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'array',
          of: [{ type: 'block' }],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'internalTitle',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Engineering Day Page',
      }
    },
  },
})