import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
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
        defineField({
          name: 'primaryCtaText',
          title: 'Primary CTA text',
          type: 'string',
        }),
        defineField({
          name: 'primaryCtaHref',
          title: 'Primary CTA link',
          type: 'string',
        }),
        defineField({
          name: 'secondaryCtaText',
          title: 'Secondary CTA text',
          type: 'string',
        }),
        defineField({
          name: 'secondaryCtaHref',
          title: 'Secondary CTA link',
          type: 'string',
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
              validation: (Rule) => Rule.required(),
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

    defineField({
      name: 'foundationSection',
      title: 'Foundation section',
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
          name: 'introText',
          title: 'Intro text',
          type: 'text',
          rows: 3,
        }),

        defineField({
          name: 'pillarOne',
          title: 'Pillar one',
          type: 'object',
          fields: [
            defineField({
              name: 'number',
              title: 'Number',
              type: 'string',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'body',
              title: 'Body',
              type: 'text',
              rows: 5,
            }),
          ],
        }),

        defineField({
          name: 'pillarTwo',
          title: 'Pillar two',
          type: 'object',
          fields: [
            defineField({
              name: 'number',
              title: 'Number',
              type: 'string',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'body',
              title: 'Body',
              type: 'text',
              rows: 5,
            }),
          ],
        }),

        defineField({
          name: 'pillarThree',
          title: 'Pillar three',
          type: 'object',
          fields: [
            defineField({
              name: 'number',
              title: 'Number',
              type: 'string',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'body',
              title: 'Body',
              type: 'text',
              rows: 5,
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'whyItMattersSection',
      title: 'Why it matters section',
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
          name: 'leftText',
          title: 'Left text',
          type: 'text',
          rows: 5,
        }),
        defineField({
          name: 'rightText',
          title: 'Right text',
          type: 'text',
          rows: 5,
        }),
      ],
    }),

    defineField({
      name: 'foundingPartnersSection',
      title: 'Founding partners section',
      type: 'object',
      fields: [
        defineField({
          name: 'kicker',
          title: 'Kicker',
          type: 'string',
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
        title: selection.title || 'Home Page',
      }
    },
  },
})