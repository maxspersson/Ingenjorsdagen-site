import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'grandPrizeCategoryPage',
  title: 'Grand Prize Category Page',
  type: 'document',

  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal title (only for CMS)',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'internalTitle',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),

    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
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
          type: 'text',
          rows: 3,
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
      ],
    }),

    defineField({
      name: 'whoSection',
      title: 'Who section',
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
          type: 'text',
          rows: 3,
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
      name: 'criteriaSection',
      title: 'Criteria section',
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
          type: 'text',
          rows: 3,
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
      name: 'criteriaItems',
      title: 'Criteria items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
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
      name: 'hallOfFameSection',
      title: 'Hall of fame section',
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
          type: 'text',
          rows: 3,
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
      name: 'featuredWinner',
      title: 'Featured winner',
      type: 'object',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
        }),
        defineField({
          name: 'year',
          title: 'Year',
          type: 'string',
        }),
        defineField({
          name: 'winner',
          title: 'Winner',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'presentedBy',
          title: 'Presented by',
          type: 'string',
        }),
        defineField({
          name: 'summary',
          title: 'Summary',
          type: 'text',
          rows: 5,
        }),
        defineField({
          name: 'secondaryText',
          title: 'Secondary text',
          type: 'text',
          rows: 4,
        }),
      ],
    }),

    defineField({
      name: 'hallOfFameItems',
      title: 'Hall of fame items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'year',
              title: 'Year',
              type: 'string',
            }),
            defineField({
              name: 'winner',
              title: 'Winner',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'presentedBy',
              title: 'Presented by',
              type: 'string',
            }),
            defineField({
              name: 'summary',
              title: 'Summary',
              type: 'text',
              rows: 5,
            }),
            defineField({
              name: 'secondaryText',
              title: 'Secondary text',
              type: 'text',
              rows: 4,
            }),
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'internalTitle',
      slug: 'slug.current',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Grand Prize Category Page',
        subtitle: selection.slug ? `/${selection.slug}` : 'No slug set',
      }
    },
  },
})