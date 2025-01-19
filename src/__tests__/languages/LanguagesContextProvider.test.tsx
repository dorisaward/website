import { fireEvent, render } from '@testing-library/react'
import { LanguagesProvider } from '../../languages/LanguagesProvider.tsx'
import { LanguagesContext } from '../../languages/LanguagesContext.ts'
import { use } from 'react'
import { languages } from '../../languages/languages.ts'

const TEST_BUTTON_TEXT = 'testButtonText'

const TestLanguagesConsumer = () => {
    const languages = use(LanguagesContext)
    return (
        <>
            <p>{languages.getText('sorry')}</p>
            <p>{languages.language}</p>
            <button onClick={languages.handleLangPress}>{TEST_BUTTON_TEXT}</button>
        </>
    )
}

describe('Languages Context Provider', () => {
    it('Given no provider, expect English', () => {
        // Given
        const { getByText } = render(<TestLanguagesConsumer/>)

        // Then
        expect(getByText(languages.en)).toBeTruthy()
        expect(getByText(TEST_BUTTON_TEXT)).toBeTruthy()
    })

    it('Given a provider, expect defaults', () => {
        // Given
        const { getByText } = render(
            <LanguagesProvider>
                <TestLanguagesConsumer/>
            </LanguagesProvider>
        )

        // Then
        expect(getByText(languages.en)).toBeTruthy()
        expect(getByText('sorry')).toBeTruthy()
    })

    it('Given language changed, expect Thai', () => {
        // Given
        const { getByText } = render(
            <LanguagesProvider>
                <TestLanguagesConsumer/>
            </LanguagesProvider>
        )

        // When
        fireEvent.click(getByText(TEST_BUTTON_TEXT))

        // Then
        expect(getByText(languages.th)).toBeTruthy()
        expect(getByText('ขอโทษ')).toBeTruthy()
    })

    it('Given a language changed twice, expect English', () => {
        // Given
        const { getByText } = render(
            <LanguagesProvider>
                <TestLanguagesConsumer/>
            </LanguagesProvider>
        )

        // When
        fireEvent.click(getByText(TEST_BUTTON_TEXT))
        fireEvent.click(getByText(TEST_BUTTON_TEXT))

        // Then
        expect(getByText(languages.en)).toBeTruthy()
        expect(getByText('Sorry')).toBeTruthy()
    })
})