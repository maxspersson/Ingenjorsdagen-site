import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'preEventsCity',
  title: 'Pre-events City',
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
      name: 'facts',
      title: 'Facts',
      type: 'object',
      fields: [
        defineField({
          name: 'date',
          title: 'Date',
          type: 'string',
        }),
        defineField({
          name: 'location',
          title: 'Location',
          type: 'string',
        }),
        defineField({
          name: 'time',
          title: 'Time',
          type: 'string',
        }),
        defineField({
          name: 'admission',
          title: 'Admission',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'content',
      title: 'Content',
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
        defineField({
          name: 'ctaLabel',
          title: 'CTA label',
          type: 'string',
        }),
        defineField({
          name: 'ctaHref',
          title: 'CTA link',
          type: 'string',
        }),
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
        title: selection.title || 'Pre-events City',
        subtitle: selection.slug ? `/${selection.slug}` : 'No slug set',
      }
    },
  },
})