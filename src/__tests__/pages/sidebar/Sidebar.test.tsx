import { render } from '@testing-library/react'
import { Sidebar } from '../../../pages/sidebar/Sidebar.tsx'
import { MockElementPropsType } from '../../../testHelpers/MockElementPropsType.ts'

jest.mock('react-router-dom', () => ({
    Outlet: ({ children, ...restProps }: MockElementPropsType) => <div {...restProps}>{children}</div>,
}))
const switchPreTestId = 'switchTestId'
jest.mock('../../../assets/Switch.tsx', () => ({
    Switch: ({ children, onSwitch, ...restProps }: MockElementPropsType<{ label: { left: string, right: string }, onSwitch: () => void }>) =>
        <div data-testid={switchPreTestId + restProps.label.left} onClick={onSwitch} {...restProps}>{children}</div>,
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
        const handleThemePress = jest.fn()

        // When
        const { baseElement } = render(<Sidebar handleThemePress={handleThemePress}/>)

        // Then
        expect(baseElement).toMatchSnapshot()
    })

})