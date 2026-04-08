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

    // ✅ HERO (nu samma struktur som Home)
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

        defineField({
          name: 'mediaType',
          title: 'Media type',
          type: 'string',
          options: {
            list: [
              { title: 'Image', value: 'image' },
              { title: 'Video', value: 'video' },
            ],
            layout: 'radio',
          },
          initialValue: 'image',
        }),

        defineField({
          name: 'image',
          title: 'Hero image',
          type: 'image',
          options: {
            hotspot: true,
          },
          hidden: ({ parent }) => parent?.mediaType !== 'image',
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt text',
              type: 'string',
            }),
          ],
        }),

        defineField({
          name: 'videoUrl',
          title: 'Hero video URL',
          type: 'url',
          hidden: ({ parent }) => parent?.mediaType !== 'video',
        }),
      ],
    }),

    // WHY
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

    // WHAT TO EXPECT
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

    // EXPECTATION CARDS
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

    // UPCOMING STOPS
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

    // CITY CARDS
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

    // CLOSING
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
            defineField({
      name: 'mediaType',
      title: 'Background media type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
      },
      initialValue: 'image',
    }),

    defineField({
      name: 'image',
      title: 'Background image',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.mediaType !== 'image',
    }),

    defineField({
      name: 'videoUrl',
      title: 'Background video URL',
      type: 'url',
      hidden: ({ parent }) => parent?.mediaType !== 'video',
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