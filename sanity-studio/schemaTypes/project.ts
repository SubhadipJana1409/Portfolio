import {defineType, defineField} from 'sanity'

export const project = defineType({
  name: 'project',
  type: 'document',
  title: 'Research Project',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Project Title',
      description: 'Title of the research project',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Short Description',
      description: 'Brief description for preview cards',
    }),
    defineField({
      name: 'detailedDescription',
      type: 'array',
      title: 'Detailed Description',
      of: [{type: 'block'}],
      description: 'Full description for projects page',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Project Image',
      description: 'Image for the project preview',
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'string'}],
      description: 'Project tags (e.g., Metagenomics, Phytochemistry)',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
      description: 'Show on homepage featured projects section',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Order',
      description: 'Order for sorting projects',
    }),
  ],
})
