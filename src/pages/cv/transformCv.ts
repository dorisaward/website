import { CvSchema } from './CvSchema.ts'

type CvRow = {
    heading: string
    text: string
}

export const transformCv = ({ basics, work, education }: CvSchema): CvRow[] => [
    {
        heading: basics.label,
        text: basics.summary
    }, {
        heading: 'Work',
        text: work.map(role =>
            `${role.name} - ${role.url}\n${role.startDate} - ${role.endDate ? role.endDate : 'Current'}\n${role.position}\n${role.summary}`
        ).join('\n\n')
    }, {
        heading: 'Contact',
        text: `${basics.email}\n${basics.url}\n${basics.phone}\n${basics.location.city}, ${basics.location.countryCode}\nReferences available on request`
    }, {
        heading: 'Education',
        text: education.map(course =>
            `${course.startDate} - ${course.endDate}\n${course.studyType} - ${course.area}\n${course.institution} - ${course.url}`
        ).join('\n\n')
    }
]