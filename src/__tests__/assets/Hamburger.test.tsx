import { Hamburger } from '../../assets/Hamburger'
import { render } from '@testing-library/react'

const testHeight = 25
const testStrokeWidth = 10

describe('Hamburger', () => {
    it('renders correctly given all props', () => {
        // Given
        const { baseElement } = render(
            <Hamburger width={testHeight} height={testHeight} strokeWidth={testStrokeWidth} stroke={'red'}/>
        )

        // Then
        expect(baseElement).toMatchSnapshot()
    })

    it('renders correctly given minimum props', () => {
        // Given
        const { baseElement } = render(
            <Hamburger height={testHeight} strokeWidth={testStrokeWidth} width={undefined}/>
        )

        // Then
        expect(baseElement).toMatchSnapshot()
    })
})