import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'attendingHeroesPage',
  title: 'Attending Heroes Page',
  type: 'document',

  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal title (only for CMS)',
      type: 'string',
    }),

    defineField({
      name: 'hero',
      title: 'Hero',
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
          type: 'text',
          rows: 3,
        }),
      ],
    }),

    defineField({
      name: 'featuredSection',
      title: 'Featured section',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'intro',
          title: 'Intro',
          type: 'text',
          rows: 3,
        }),
      ],
    }),

    defineField({
      name: 'moderatorSection',
      title: 'Moderator section',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'intro',
          title: 'Intro',
          type: 'text',
          rows: 3,
        }),
      ],
    }),

    defineField({
      name: 'heroTalksSection',
      title: 'Hero talks section',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'intro',
          title: 'Intro',
          type: 'text',
          rows: 3,
        }),
      ],
    }),

    defineField({
      name: 'panelsSection',
      title: 'Panels section',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'intro',
          title: 'Intro',
          type: 'text',
          rows: 3,
        }),
      ],
    }),

    defineField({
      name: 'firesidesSection',
      title: 'Firesides section',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'intro',
          title: 'Intro',
          type: 'text',
          rows: 3,
        }),
      ],
    }),

    defineField({
      name: 'masterclassesSection',
      title: 'Masterclasses section',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'intro',
          title: 'Intro',
          type: 'text',
          rows: 3,
        }),
      ],
    }),

    defineField({
      name: 'keynoteSection',
      title: 'Keynote section',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'intro',
          title: 'Intro',
          type: 'text',
          rows: 3,
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
        title: selection.title || 'Attending Heroes Page',
      }
    },
  },
})