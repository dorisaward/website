import { PropsWithChildren, use, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Switch } from '../../assets/Switch.tsx'
import { Hamburger } from '../../assets/Hamburger.tsx'
import { LanguagesContext } from '../../languages/LanguagesContext.ts'
import { languages } from '../../languages/languages.ts'
import { Navigation } from '../../assets/Navigation.tsx'

const SWITCH_WIDTH = '120px'
const HAMBURGER_SIZE = 24

const AppContainer = ({ children }: PropsWithChildren) =>
  <div className={'absolute top-0 left-0 right-0 bg-1 text-center text-base'}>{children}</div>

const Container = ({ children, ...props }: PropsWithChildren) =>
  <div className={'bg-2 flex flex-wrap fixed top-0 w-screen sm:w-32 pt-9'} {...props}>{children}</div>
// margin-left: ${({ $isVisible }) => ($isVisible ? 0 : -100) + '%'};
// transition: margin-left 0.1s;
// @media only screen and (min-width: ${MOBILE_WIDTH}px) {
//     margin-left: ${({ $isVisible }) => ($isVisible ? 0 : '-' + SWITCH_WIDTH)};
// }
// `
const HamburgerContainer = ({ children, onClick }: PropsWithChildren<{ onClick: () => void }>) =>
  <div className={`bg-white absolute top-0 z-1 p-1 w-${HAMBURGER_SIZE}px h-${HAMBURGER_SIZE}px`} onClick={onClick}>{children}</div>
//     margin-left: ${({ $isVisible }) => ($isVisible ? 0 : 100) + '%'};
//     @media only screen and (min-width: ${MOBILE_WIDTH}px) {
//         margin-left: ${SWITCH_WIDTH};
//     }
// `
const ItemContainer = ({ children }: PropsWithChildren) =>
  <div className={`grow basis-${SWITCH_WIDTH}`}>{children}</div>

export type SidebarProps = {
  handleThemePress: () => void
}

export const Sidebar = ({
                          handleThemePress
                        }: SidebarProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const { language, handleLangPress } = use(LanguagesContext)
  const toggleVisibility = () => setIsVisible(prevVisible => !prevVisible)

  const RenderHamburger = () => (
    <HamburgerContainer onClick={toggleVisibility}>
      <Hamburger
        strokeWidth={4}
        height={HAMBURGER_SIZE}
        width={HAMBURGER_SIZE}
      />
    </HamburgerContainer>
  )

  return (
    <AppContainer>
      <RenderHamburger/>
      {isVisible && (
        <Container>
          <ItemContainer>
            <Navigation/>
          </ItemContainer>
          <ItemContainer>
            <Switch
              checked={true}
              onSwitch={handleThemePress}
              label={{ left: '🌘', right: '☀️' }}
            />
            <Switch
              checked={language === languages.en}
              onSwitch={handleLangPress}
              label={{ left: 'UK', right: 'TH' }}
            />
          </ItemContainer>
        </Container>
      )}
      <Outlet/>
    </AppContainer>
  )
}