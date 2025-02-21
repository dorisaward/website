import { transformCv } from '../../../pages/cv/transformCv.ts'

describe('transformCv', () => {
    it('should transform cv json', () => {
        // Given
        const cvJson = {
            'basics': {
                'name': 'basic name',
                'label': 'label',
                'email': 'email',
                'url': 'url',
                'phone': 'phone',
                'location': {
                    'city': 'city',
                    'countryCode': 'country'
                },
                'summary': 'basic summary',
                'profiles': [{
                    'network': 'network',
                    'username': 'username',
                    'url': 'profile url'
                }]
            },
            'work': [{
                'name': 'work name',
                'position': 'position',
                'url': 'work url',
                'startDate': 'work start',
                'summary': 'work summary',
            }],
            'education': [{
                'institution': 'institution',
                'url': 'edu url',
                'area': 'area',
                'studyType': 'study',
                'startDate': 'edu start',
                'endDate': 'edu end'
            }],
            'skills': [{
                'name': 'skill name',
                'level': 'level',
                'keywords': [
                    'keyword'
                ]
            }],
            'languages': [{
                'language': 'lang',
                'fluency': 'fluency'
            }]
        }

        // When
        const result = transformCv(cvJson)

        // Then
        expect(result).toMatchInlineSnapshot(`
[
  {
    "heading": "label",
    "text": "basic summary",
  },
  {
    "heading": "Work",
    "text": "work name - work url
work start - Current
position
work summary",
  },
  {
    "heading": "Contact",
    "text": "email
url
phone
city, country
References available on request",
  },
  {
    "heading": "Education",
    "text": "edu start - edu end
study - area
institution - edu url",
  },
]
`)
    })
})