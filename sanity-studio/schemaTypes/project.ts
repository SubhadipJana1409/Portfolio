import {defineType, defineField} from 'sanity'

export const project = defineType({
  name: 'project',
  type: 'document',
  title: 'Research Project',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Card Title',
      description: 'Short title for the project card (e.g., "AMR in the Mahananda River")',
    }),
    defineField({
      name: 'fullTitle',
      type: 'string',
      title: 'Full Title',
      description: 'Full title shown in the modal header (e.g., "Comprehensive Assessment of Antibiotic Resistance in the Mahananda River")',
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
