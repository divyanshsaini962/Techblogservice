import { defineField,defineType } from "sanity";


export default defineField({
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            title: 'Approved',
            name: 'approved',
            type: 'boolean',
            description: "Comment won't show on the site without approval",
        }),
        defineField({
            name: 'email',
            type: 'string',
        }),
        defineField({
            name: 'comment',
            type: 'text',
        }),
        defineField({
            name: 'post',
            type: 'reference',
            to: {type: 'post'},
        }),
    ]
})