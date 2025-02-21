import { render } from '@testing-library/react'
import { Cv } from '../../../pages/cv/Cv.tsx'
import { LangContext } from '../../../languages/types/LanguagesContext.ts'
import { MockLanguagesProvider } from '../../../testHelpers/MockLanguagesProvider.tsx'
import { languages } from '../../../languages/languages.ts'

jest.mock('../../../assets/cv.json', () => ({
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
}))
jest.mock('../../../pages/cv/logos/index.ts', () => ({
    images: [
        jest.mock('../../../pages/cv/logos/react.png'),
        jest.mock('../../../pages/cv/logos/react.png')
    ]
}))

const thaiLangError = 'Unfortunately, Thai language is not available'

describe('Cv', () => {
    it('renders, given language english', () => {
        // Given
        const value: LangContext = {
            getText: jest.fn(),
            handleLangPress: jest.fn(),
            language: languages.en
        }

        // When
        const { baseElement, queryByText, getAllByRole } = render(
            <MockLanguagesProvider value={value}><Cv/></MockLanguagesProvider>
        )

        // Then
        expect(queryByText(thaiLangError)).toBeFalsy()
        expect(getAllByRole('img')).toHaveLength(2)
        expect(baseElement).toMatchSnapshot()
    })

    it('renders, given language thai', () => {
        // Given
        const value: LangContext = {
            getText: jest.fn(),
            handleLangPress: jest.fn(),
            language: languages.th
        }

        // When
        const { getByText, baseElement, getAllByRole } = render(
            <MockLanguagesProvider value={value}><Cv/></MockLanguagesProvider>
        )

        // Then
        expect(getByText(thaiLangError)).toBeTruthy()
        expect(getAllByRole('img')).toHaveLength(2)
        expect(baseElement).toMatchSnapshot()
    })
})
