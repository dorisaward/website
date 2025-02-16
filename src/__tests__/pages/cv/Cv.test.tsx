import { render } from '@testing-library/react'
import { Cv } from '../../../pages/cv/Cv.tsx'
import { LangContext } from '../../../languages/types/LanguagesContext.ts'
import { MockLanguagesProvider } from '../../../testHelpers/MockLanguagesProvider.tsx'
import { languages } from '../../../languages/languages.ts'

jest.mock('../../../assets/cv.json', () => ({ data: [{ heading: 'cv heading', text: 'cv text' }] }))
jest.mock('../../../pages/cv/logos/index.ts', () => ({ images: [
    jest.mock('../../../pages/cv/logos/react.png'),
    jest.mock('../../../pages/cv/logos/react.png')
] }))

const cvHeading = 'cv heading'
const cvText = 'cv text'
const pageHeading = 'Curriculum Vitae'
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
        const { getByText, queryByText, getAllByRole } = render(<MockLanguagesProvider value={value}><Cv/></MockLanguagesProvider>)

        // Then
        expect(queryByText(thaiLangError)).toBeFalsy()
        expect(getByText(pageHeading)).toBeTruthy()
        expect(getByText(cvHeading)).toBeTruthy()
        expect(getByText(cvText)).toBeTruthy()
        expect(getAllByRole('img')).toHaveLength(2)
    })

    it('renders, given language thai', () => {
        // Given
        const value: LangContext = {
            getText: jest.fn(),
            handleLangPress: jest.fn(),
            language: languages.th
        }

        // When
        const { getByText, getAllByRole } = render(<MockLanguagesProvider value={value}><Cv/></MockLanguagesProvider>)

        // Then
        expect(getByText(thaiLangError)).toBeTruthy()
        expect(getByText(pageHeading)).toBeTruthy()
        expect(getByText(cvHeading)).toBeTruthy()
        expect(getByText(cvText)).toBeTruthy()
        expect(getAllByRole('img')).toHaveLength(2)
    })
})