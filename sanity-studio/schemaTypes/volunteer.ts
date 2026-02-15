import {defineType, defineField} from 'sanity'

export const volunteer = defineType({
  name: 'volunteer',
  type: 'document',
  title: 'Volunteering Activity',
  fields: [
    defineField({
      name: 'role',
      type: 'string',
      title: 'Role/Title',
      description: 'Volunteer position or activity title',
    }),
    defineField({
      name: 'organization',
      type: 'string',
      title: 'Organization',
      description: 'Name of the organization or group',
    }),
    defineField({
      name: 'dates',
      type: 'string',
      title: 'Dates',
      description: 'Date range or single date',
    }),
    defineField({
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{type: 'string'}],
      description: 'Key activities and contributions',
    }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Icon Class',
      description: 'FontAwesome icon class',
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Order',
      description: 'Order for sorting (higher numbers appear first)',
    }),
  ],
})
