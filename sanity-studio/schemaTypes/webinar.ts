import {defineType, defineField} from 'sanity'

export const webinar = defineType({
  name: 'webinar',
  type: 'document',
  title: 'Webinar & Continuing Education',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Webinar Title',
      description: 'Title of the webinar',
    }),
    defineField({
      name: 'host',
      type: 'string',
      title: 'Host/Organization',
      description: 'Organization hosting the webinar (e.g., Nature Webinars)',
    }),
    defineField({
      name: 'date',
      type: 'date',
      title: 'Date',
      description: 'Date attended',
    }),
    defineField({
      name: 'topic',
      type: 'text',
      title: 'Topic/Key Focus',
      description: 'Brief description of what was covered',
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Recording/Video Link',
      description: 'URL to the webinar recording (if available)',
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Order',
      description: 'Order for sorting (higher numbers appear first)',
    }),
  ],
})
