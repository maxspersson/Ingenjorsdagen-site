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
          name: 'kicker',
          title: 'Kicker',
          type: 'string',
        }),
        defineField({
  name: 'title',
  title: 'Title',
  type: 'text',
  rows: 2,
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