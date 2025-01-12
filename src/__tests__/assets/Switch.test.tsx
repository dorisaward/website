import { Switch } from '../../assets/Switch'
import { fireEvent, render } from '@testing-library/react'

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

    it('Given clicked, should run onSwitch', () => {
        // Given
        const handleSwitch = jest.fn()
        const { getByText } = render(
            <Switch checked={false} onSwitch={handleSwitch} label={TEST_LABEL}/>
        )

        // When
        const label = getByText(TEST_LABEL)
        fireEvent.click(label.nextSibling!)

        // Then
        expect(handleSwitch).toHaveBeenCalledTimes(1)
    })

    it('Given checked then unchecked, the label styling changes', () => {
        // Given
        const { rerender, getByText } = render(
            <Switch checked={false} onSwitch={jest.fn} label={TEST_LABEL}/>
        )
        const firstClass = getByText(TEST_LABEL).nextSibling!['className']

        // When
        rerender(<Switch checked={true} onSwitch={jest.fn} label={TEST_LABEL}/>)

        // Then
        const secondClass = getByText(TEST_LABEL).nextSibling!['className']
        expect(firstClass).not.toEqual(secondClass)
    })
})