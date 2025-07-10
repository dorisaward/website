import { PropsWithChildren, use } from 'react'
import { Daw } from '../../assets/Daw'
import { LanguagesContext } from '../../languages/LanguagesContext.ts'

const Container = ({ children }: PropsWithChildren) => <div>{children}</div>// styled.div`
//     height: 100vh;
// `

const Text = ({ children }: PropsWithChildren) => <p>{children}</p>// styled.p`
//     color: ${({ theme }) => theme.fontColour}
// `

export const Home = () => {
    // const theme = useTheme()
    const { getText } = use(LanguagesContext)

    return (
        <Container>
            <Daw width={'50%'} stroke={undefined} />
            <Text>
                {getText('hello')}
            </Text>
        </Container>
    )
}