import {defineType, defineField} from 'sanity'

export const skill = defineType({
  name: 'skill',
  type: 'document',
  title: 'Skill',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Skill Name',
      description: 'The name of the skill or technology',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Brief explanation of experience with this skill',
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          {title: 'Bioinformatics', value: 'bioinformatics'},
          {title: 'Lab Techniques', value: 'lab'},
          {title: 'Professional', value: 'professional'},
        ],
      },
      description: 'Category for filtering skills',
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Order',
      description: 'Order for arranging skills within category',
    }),
  ],
})
