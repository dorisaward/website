import { render } from '@testing-library/react'
import { Navigation } from '../../assets/Navigation.tsx'
import { MockElementPropsType } from '../../testHelpers/MockElementPropsType.ts'

jest.mock('react-router-dom', () => ({
    Link: ({ children, ...restProps }: MockElementPropsType) => <div {...restProps}>{children}</div>
}))

describe('Navigation', () => {
    it('renders correctly', () => {
        // Given
        const { baseElement, getByRole } = render(<Navigation />)

        // Then
        expect(getByRole('navigation')).toBeTruthy()
        expect(baseElement).toMatchSnapshot()
    })
})