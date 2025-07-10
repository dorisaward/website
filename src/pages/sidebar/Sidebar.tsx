import { PropsWithChildren, use, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Switch } from '../../assets/Switch.tsx'
import { Hamburger } from '../../assets/Hamburger.tsx'
import { LanguagesContext } from '../../languages/LanguagesContext.ts'
import { languages } from '../../languages/languages.ts'
import { Navigation } from '../../assets/Navigation.tsx'
import { MOBILE_WIDTH } from '../../assets/constants.ts'

const SWITCH_WIDTH = '120px'
const HAMBURGER_SIZE = 24

const AppContainer = ({ children }: PropsWithChildren) =>
  <div className={'absolute top-0 left-0 right-0 bg-1 text-center text-base'}>{children}</div>

const Container = ({ children, ...props }: PropsWithChildren) =>
  <div className={'bg-2 flex flex-wrap fixed top-0'} {...props}>{children}</div>
// styled.div<{ $isVisible: boolean }>`
// width: 100vw; // mobile-only
// padding-top: ${HAMBURGER_SIZE + 10}px;
// margin-left: ${({ $isVisible }) => ($isVisible ? 0 : -100) + '%'};
// transition: margin-left 0.1s;
// @media only screen and (min-width: ${MOBILE_WIDTH}px) {
//     width: ${SWITCH_WIDTH};
//     margin-left: ${({ $isVisible }) => ($isVisible ? 0 : '-' + SWITCH_WIDTH)};
// }
// `
const HamburgerContainer = ({ children, onClick }: PropsWithChildren<{ onClick: () => void }>) =>
  <div className={'bg-white absolute top-0 z-1'} onClick={onClick}>{children}</div>
// styled.div<{ $isVisible: boolean }>`
//     padding: ${({ theme }) => theme.padding};
//     width: ${HAMBURGER_SIZE}px;
//     height: ${HAMBURGER_SIZE}px;
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