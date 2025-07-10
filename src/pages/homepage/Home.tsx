import { PropsWithChildren, use } from 'react'
import { Daw } from '../../assets/Daw'
import { LanguagesContext } from '../../languages/LanguagesContext.ts'

const Container = ({ children }: PropsWithChildren) =>
  <div className={'h-screen flex flex-col items-center justify-evenly'}>{children}</div>

const Text = ({ children }: PropsWithChildren) =>
  <p className={'text-xl text-black dark:text-white'}>{children}</p>

export const Home = () => {
  const { getText } = use(LanguagesContext)
  const stroke = document.documentElement.classList.contains('dark') ? 'white' : 'black'

  return (
    <Container>
      <Daw width={'50%'} stroke={stroke}/>
      <Text>
        {getText('hello')}
      </Text>
    </Container>
  )
}