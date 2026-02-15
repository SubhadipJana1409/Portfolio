import {defineType, defineField} from 'sanity'

export const certification = defineType({
  name: 'certification',
  type: 'document',
  title: 'Certification & Training',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Certification Title',
      description: 'Name of the certification or course',
    }),
    defineField({
      name: 'organization',
      type: 'string',
      title: 'Organization/Institution',
      description: 'Issuing organization (e.g., Coursera, Johns Hopkins University)',
    }),
    defineField({
      name: 'keySkills',
      type: 'string',
      title: 'Key Skills',
      description: 'Comma-separated key skills gained',
    }),
    defineField({
      name: 'certificateLink',
      type: 'url',
      title: 'Certificate Link',
      description: 'URL to verify the certificate',
    }),
    defineField({
      name: 'completionDate',
      type: 'date',
      title: 'Completion Date',
      description: 'Date of completion',
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Order',
      description: 'Order for sorting (higher numbers appear first)',
    }),
  ],
})
