import {defineType, defineField} from 'sanity'

export const scholarship = defineType({
  name: 'scholarship',
  type: 'document',
  title: 'Scholarship & Award',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Award Title',
      description: 'Name of the scholarship or award',
    }),
    defineField({
      name: 'level',
      type: 'string',
      title: 'Level/Category',
      description: 'E.g., Postgraduate Level, Undergraduate Level',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Details about the award',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
      description: 'Whether to show as main featured award',
      initialValue: false,
    }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Icon Class',
      description: 'FontAwesome icon class',
      initialValue: 'fa-solid fa-trophy',
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Order',
      description: 'Order for secondary awards',
    }),
  ],
})
