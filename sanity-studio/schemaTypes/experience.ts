import {defineType, defineField} from 'sanity'

export const experience = defineType({
  name: 'experience',
  type: 'document',
  title: 'Professional Experience',
  fields: [
    defineField({
      name: 'position',
      type: 'string',
      title: 'Position/Role',
      description: 'Job title or position',
    }),
    defineField({
      name: 'dates',
      type: 'string',
      title: 'Dates',
      description: 'Date range (e.g., Mar 2024 – Jul 2024)',
    }),
    defineField({
      name: 'organization',
      type: 'string',
      title: 'Organization',
      description: 'Company, institution, or organization',
    }),
    defineField({
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{type: 'string'}],
      description: 'Key responsibilities and achievements',
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          {title: 'Research Experience', value: 'research'},
          {title: 'Internships', value: 'internship'},
          {title: 'Professional & Academic Support', value: 'professional'},
        ],
      },
      description: 'Category for filtering',
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
