import { fireEvent, render } from '@testing-library/react'
import { Sidebar, SidebarProps } from '../../../pages/sidebar/Sidebar.tsx'
import { theme } from '../../../theme/theme.ts'
import { MockElementPropsType } from '../../../testHelpers/MockElementPropsType.ts'

jest.mock('react-router-dom', () => ({
    Outlet: ({ children, ...restProps }: MockElementPropsType) => <div {...restProps}>{children}</div>,
}))
const switchPreTestId = 'switchTestId'
jest.mock('../../../assets/Switch.tsx', () => ({
    Switch: ({ children, ...restProps }: MockElementPropsType<{ label: { left: string, right: string } }>) =>
        <div data-testid={switchPreTestId + restProps.label.left} {...restProps}>{children}</div>,
}))
const hamburgerTestId = 'hamburgerTestId'
jest.mock('../../../assets/Hamburger.tsx', () => ({
    Hamburger: ({ children, ...restProps }: MockElementPropsType) =>
        <div data-testid={hamburgerTestId} {...restProps}>{children}</div>,
}))
jest.mock('../../../assets/Navigation.tsx', () => ({
    Navigation: ({ children, ...restProps }: MockElementPropsType) => <div {...restProps}>{children}</div>,
}))

describe('Sidebar', () => {
    it('renders', () => {
        // Given
        const themeProps: SidebarProps['theme'] = {
            selectedTheme: theme.light,
            handleThemePress: jest.fn(),
        }

        // When
        const { baseElement } = render(<Sidebar theme={themeProps}/>)

        // Then
        expect(baseElement).toMatchSnapshot()
    })

    it('hides', () => {
        // Given
        const themeProps: SidebarProps['theme'] = {
            selectedTheme: theme.light,
            handleThemePress: jest.fn(),
        }
        const { getByTestId } = render(<Sidebar theme={themeProps}/>)
        const hamburgerElement = getByTestId(hamburgerTestId)
        const classNameBefore = hamburgerElement.parentElement?.className

        // When
        fireEvent.click(hamburgerElement)

        // Then
        const classNameAfter = getByTestId(hamburgerTestId).parentElement?.className
        expect(classNameBefore).not.toEqual(classNameAfter)
    })
})