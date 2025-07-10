import { fireEvent, render } from '@testing-library/react'
import App from '../App.tsx'
import { MockElementPropsType } from '../testHelpers/MockElementPropsType.ts'
import { ReactNode } from 'react'
import { SidebarProps } from '../pages/sidebar/Sidebar.tsx'

jest.mock('../pages/homepage/Home.tsx', () => ({
    Home: ({ children, ...restProps }: MockElementPropsType) => <div {...restProps}>{children}</div>,
}))
const CHANGE_THEME_BUTTON_TEXT = 'CHANGE_THEME_BUTTON'
jest.mock('../pages/sidebar/Sidebar.tsx', () => ({
    Sidebar: ({ handleThemePress }: MockElementPropsType<SidebarProps>) => (
        <div>
            <button onClick={handleThemePress}>{CHANGE_THEME_BUTTON_TEXT}</button>
        </div>
    ),
}))
jest.mock('../pages/cv/Cv.tsx', () => ({
    Cv: ({ children, ...restProps }: MockElementPropsType) => <div {...restProps}>{children}</div>,
}))

jest.mock('react-router-dom', () => ({
    BrowserRouter: ({ children, ...restProps }: MockElementPropsType) => <div {...restProps}>{children}</div>,
    Routes: ({ children, ...restProps }: MockElementPropsType) => <div {...restProps}>{children}</div>,
    Route: ({ children, element, ...restProps }: MockElementPropsType<{element?: ReactNode}>) => element && children && (
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
        const { getByText } = render(<App/>)
        jest.spyOn(document.documentElement.classList, 'toggle')

        // When
        fireEvent.click(getByText(CHANGE_THEME_BUTTON_TEXT))

        // Then
        expect(document.documentElement.classList.toggle).toHaveBeenCalledWith('dark')
    })
})