import {defineType, defineField} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'profileImage',
      title: 'Profile Picture (Hero Section)',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'cvFile',
      title: 'CV / Resume (PDF)',
      type: 'file',
      options: {accept: '.pdf'},
    }),
  ],
})
