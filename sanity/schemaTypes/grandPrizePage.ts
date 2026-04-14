import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'grandPrizePage',
  title: 'Grand Prize Page',
  type: 'document',

  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal title (only for CMS)',
      type: 'string',
    }),

    defineField({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Meta title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Meta description',
      type: 'text',
    }),
    defineField({
      name: 'ogTitle',
      title: 'OG title',
      type: 'string',
    }),
    defineField({
      name: 'ogDescription',
      title: 'OG description',
      type: 'text',
    }),
    defineField({
      name: 'noIndex',
      title: 'No index',
      type: 'boolean',
    }),
    defineField({
      name: 'ogImage',
      title: 'OG image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        }),
      ],
    }),
  ],
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
  type: 'text',
  rows: 3,
}),
        defineField({
          name: 'text',
          title: 'Text',
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
      name: 'categoriesSection',
      title: 'Categories section',
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
      name: 'categories',
      title: 'Categories',
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
              name: 'description',
              title: 'Description',
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
      name: 'jurySection',
      title: 'Jury section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'juryMembers',
      title: 'Jury members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'role',
              title: 'Role / title',
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
          ],
        },
      ],
    }),

    defineField({
      name: 'bottomSection',
      title: 'Bottom section',
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
        defineField({
          name: 'linkLabel',
          title: 'Link label',
          type: 'string',
        }),
        defineField({
          name: 'linkHref',
          title: 'Link URL',
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
        title: selection.title || 'Grand Prize Page',
      }
    },
  },
})