import {defineType, defineField} from 'sanity'

export const publication = defineType({
  name: 'publication',
  type: 'document',
  title: 'Publication',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Full title of the publication',
    }),
    defineField({
      name: 'authors',
      type: 'string',
      title: 'Authors',
      description: "Author list (use 'et al.' for more than 5 authors)",
    }),
    defineField({
      name: 'journal',
      type: 'string',
      title: 'Journal/Conference',
      description: 'Name of the journal or conference',
    }),
    defineField({
      name: 'volume',
      type: 'string',
      title: 'Volume/Issue',
      description: 'Volume and issue numbers',
    }),
    defineField({
      name: 'pages',
      type: 'string',
      title: 'Pages',
      description: 'Page numbers',
    }),
    defineField({
      name: 'year',
      type: 'number',
      title: 'Year',
      description: 'Publication year',
    }),
    defineField({
      name: 'doi',
      type: 'string',
      title: 'DOI',
      description: 'Digital Object Identifier',
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Link',
      description: 'URL to the publication',
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Order',
      description: 'Order for sorting (higher numbers appear first)',
    }),
  ],
})
