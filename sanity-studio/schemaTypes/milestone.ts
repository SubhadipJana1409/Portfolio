import {defineType, defineField} from 'sanity'

export const milestone = defineType({
  name: 'milestone',
  type: 'document',
  title: 'Timeline Milestone',
  fields: [
    defineField({
      name: 'date',
      type: 'string',
      title: 'Date',
      description: 'Date range or single date for the milestone',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Main title of the milestone',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Detailed description of the milestone',
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          {title: 'Academic', value: 'academic'},
          {title: 'Research & Projects', value: 'research'},
          {title: 'Professional', value: 'professional'},
          {title: 'Awards', value: 'award'},
        ],
      },
      description: 'Category for filtering',
    }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Icon Class',
      description: 'FontAwesome icon class (e.g., fa-solid fa-graduation-cap)',
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Order',
      description: 'Order for sorting milestones (higher numbers appear first)',
    }),
  ],
})
