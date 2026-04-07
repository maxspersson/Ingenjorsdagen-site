import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'preEventsPage',
  title: 'Pre-events Page',
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
          name: 'eyebrow',
          title: 'Eyebrow',
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
      name: 'whySection',
      title: 'Why section',
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
        defineField({
          name: 'body1',
          title: 'Body 1',
          type: 'text',
          rows: 4,
        }),
        defineField({
          name: 'body2',
          title: 'Body 2',
          type: 'text',
          rows: 4,
        }),
        defineField({
          name: 'body3',
          title: 'Body 3',
          type: 'text',
          rows: 4,
        }),
      ],
    }),

    defineField({
      name: 'whatToExpectSection',
      title: 'What to expect section',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
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
      name: 'expectationCards',
      title: 'Expectation cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'text',
              title: 'Text',
              type: 'text',
              rows: 3,
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'upcomingStopsSection',
      title: 'Upcoming stops section',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
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
      name: 'cityCards',
      title: 'City cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'meta',
              title: 'Meta line',
              type: 'string',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'text',
              title: 'Text',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'href',
              title: 'Link URL',
              type: 'string',
            }),
            defineField({
              name: 'linkLabel',
              title: 'Link label',
              type: 'string',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'closingSection',
      title: 'Closing section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'body1',
          title: 'Body 1',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'body2',
          title: 'Body 2',
          type: 'text',
          rows: 4,
        }),
        defineField({
          name: 'body3',
          title: 'Body 3',
          type: 'text',
          rows: 4,
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
        title: selection.title || 'Pre-events Page',
      }
    },
  },
})