import {defineType, defineField} from 'sanity'

export const presentation = defineType({
  name: 'presentation',
  type: 'document',
  title: 'Presentation & Engagement',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Presentation Title',
      description: 'Title of the presentation',
    }),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          {title: 'Poster Presentation', value: 'poster'},
          {title: 'Oral Presentation', value: 'oral'},
          {title: 'Lecture', value: 'lecture'},
          {title: 'Workshop', value: 'workshop'},
        ],
      },
      description: 'Type of presentation',
    }),
    defineField({
      name: 'event',
      type: 'string',
      title: 'Event/Conference',
      description: 'Name of the conference or event',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Brief description of the presentation',
    }),
    defineField({
      name: 'detailsLink',
      type: 'url',
      title: 'Details/View Link',
      description: 'URL to view the poster or details',
    }),
    defineField({
      name: 'date',
      type: 'date',
      title: 'Date',
      description: 'Date of the presentation',
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Order',
      description: 'Order for sorting (higher numbers appear first)',
    }),
  ],
})
