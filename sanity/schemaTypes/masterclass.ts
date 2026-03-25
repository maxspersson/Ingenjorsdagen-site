import {defineField, defineType} from "sanity";

export default defineType({
  name: "masterclass",
  title: "Masterclass",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "kicker",
      title: "Kicker",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "speaker",
      title: "Speaker",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Background image",
      type: "image",
      options: {hotspot: true},
    }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {hotspot: true},
    }),
    defineField({
      name: "details",
      title: "Details content",
      type: "array",
      of: [
        {type: "block"},
      ],
    }),
  ],
});