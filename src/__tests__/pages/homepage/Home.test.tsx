import { LangContext } from '../../../languages/types/LanguagesContext.ts'
import { languages } from '../../../languages/languages.ts'
import { render } from '@testing-library/react'
import { MockLanguagesProvider } from '../../../testHelpers/MockLanguagesProvider.tsx'
import { Home } from '../../../pages/homepage/Home.tsx'
import { MockElementPropsType } from '../../../testHelpers/MockElementPropsType.ts'

jest.mock('../../../assets/Daw.tsx', () => ({
  Daw: ({ children, ...restProps }: MockElementPropsType) => <div
    data-testid='dawTestId' {...restProps}>{children}</div>
}))

describe('Home', () => {
  it('renders', () => {
    // Given
    const testText = 'testText'
    const value: LangContext = {
      getText: jest.fn(() => testText),
      handleLangPress: jest.fn(),
      language: languages.en
    }

    // When
    const { getByText, getByTestId, baseElement } = render(
      <MockLanguagesProvider value={value}>
        <Home/>
      </MockLanguagesProvider>
    )

    // Then
    expect(getByText(testText)).toBeTruthy()
    expect(getByTestId('dawTestId')).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })
})