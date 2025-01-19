import { fireEvent, render } from '@testing-library/react'
import App from '../App.tsx'
import { MockElementPropsType } from '../testHelpers/MockElementPropsType.ts'
import { ReactNode } from 'react'
import { SidebarProps } from '../pages/sidebar/Sidebar.tsx'
import { theme } from '../theme/theme.ts'

jest.mock('../pages/homepage/Home.tsx', () => ({
    Home: ({ children, ...restProps }: MockElementPropsType) => <div {...restProps}>{children}</div>,
}))
const CHANGE_THEME_BUTTON_TEXT = 'CHANGE_THEME_BUTTON'
jest.mock('../pages/sidebar/Sidebar.tsx', () => ({
    Sidebar: ({ theme }: MockElementPropsType<SidebarProps>) => (
        <div>
            <button onClick={theme.handleThemePress}>{CHANGE_THEME_BUTTON_TEXT}</button>
            <p>{theme.selectedTheme}</p>
        </div>
    ),
}))
jest.mock('../pages/cv/Cv.tsx', () => ({
    Cv: ({ children, ...restProps }: MockElementPropsType) => <div {...restProps}>{children}</div>,
}))

jest.mock('react-router-dom', () => ({
    BrowserRouter: ({ children, ...restProps }: MockElementPropsType) => <div {...restProps}>{children}</div>,
    Routes: ({ children, ...restProps }: MockElementPropsType) => <div {...restProps}>{children}</div>,
    Route: ({ children, element, ...restProps }: MockElementPropsType<{element?: ReactNode}>) => (
        <div {...restProps}>{element}{children}</div>
    ),
}))

describe('App', () => {
    it('renders', () => {
        // Given
        const { baseElement } = render(<App/>)

        // Then
        expect(baseElement).toMatchSnapshot()
    })

    it('switches theme', () => {
        // Given
        const { getByText, queryByText } = render(<App/>)

        // When
        fireEvent.click(getByText(CHANGE_THEME_BUTTON_TEXT))

        // Then
        expect(queryByText(theme.light)).toBeFalsy()
        expect(getByText(theme.dark)).toBeTruthy()
    })

    it('switches theme back', () => {
        // Given
        const { getByText, queryByText } = render(<App/>)

        // When
        fireEvent.click(getByText(CHANGE_THEME_BUTTON_TEXT))
        fireEvent.click(getByText(CHANGE_THEME_BUTTON_TEXT))

        // Then
        expect(getByText(theme.light)).toBeTruthy()
        expect(queryByText(theme.dark)).toBeFalsy()
    })
})