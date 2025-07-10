import { Switch } from '../../assets/Switch'
import { render } from '@testing-library/react'

jest.mock('react-switch')

const TEST_LABEL = 'test label'
const TEST_SECOND_LABEL = 'test second label'

describe('Switch', () => {
    it('Given one label, should display', () => {
        // Given
        const { getByText } = render(
            <Switch checked={true} onSwitch={jest.fn} label={TEST_LABEL}/>
        )

        // Then
        expect(getByText(TEST_LABEL)).toBeTruthy()
    })

    it('Given two labels, should display', () => {
        // Given
        const { getByText } = render(
            <Switch checked={true} onSwitch={jest.fn} label={{ left: TEST_LABEL, right: TEST_SECOND_LABEL }}/>
        )

        // Then
        expect(getByText(TEST_LABEL)).toBeTruthy()
        expect(getByText(TEST_SECOND_LABEL)).toBeTruthy()
    })
})