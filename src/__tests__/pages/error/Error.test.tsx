import { render } from '@testing-library/react'
import { ErrorPage } from '../../../pages/error/Error.tsx'
import { LangContext } from '../../../languages/types/LanguagesContext.ts'
import { MockLanguagesProvider } from '../../../testHelpers/MockLanguagesProvider.tsx'
import { languages } from '../../../languages/languages.ts'

describe('Error', () => {
    it('renders', () => {
        // Given
        const errorText = 'Error'
        const value: LangContext = {
            getText: jest.fn(() => errorText),
            handleLangPress: jest.fn(),
            language: languages.en
        }

        // When
        const { getByText } = render(<MockLanguagesProvider value={value}><ErrorPage/></MockLanguagesProvider>)

        // Then
        expect(getByText(errorText)).toBeTruthy()
    })
})