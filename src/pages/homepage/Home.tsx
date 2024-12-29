import styled, { useTheme } from "styled-components"
import { Daw } from "../../assets/Daw"
import { getText } from "../../assets/languages"

const Text = styled.p`
    color: ${({ theme }) => theme.fontColour}
`

export const Home = () => {
    const theme = useTheme()
    return (
        <>
            <Daw width={'50%'} stroke={theme.fontColour} />
            <Text>
                {getText('sorry')}
            </Text>
        </>
    )
}