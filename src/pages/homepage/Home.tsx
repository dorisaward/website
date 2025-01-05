import { use } from 'react'
import styled, { useTheme } from 'styled-components'
import { Daw } from '../../assets/Daw'
import { LanguagesContext } from '../../languages/LanguagesContext.ts'


const Text = styled.p`
    color: ${({ theme }) => theme.fontColour}
`

export const Home = () => {
    const theme = useTheme()
    const { getText } = use(LanguagesContext)

    return (
        <>
            <Daw width={'50%'} stroke={theme.fontColour} />
            <Text>
                {getText('sorry')}
            </Text>
        </>
    )
}