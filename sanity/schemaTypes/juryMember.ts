import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'juryMember',
  title: 'Jury Member',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
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
    defineField({
      name: 'sortOrder',
      title: 'Sort order',
      type: 'number',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
      media: 'image',
    },
  },
})