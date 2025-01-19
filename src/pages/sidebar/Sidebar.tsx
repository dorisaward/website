import styled from 'styled-components'
import { use, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Switch } from '../../assets/Switch.tsx'
import { theme } from '../../theme/theme.ts'
import { Hamburger } from '../../assets/Hamburger.tsx'
import { LanguagesContext } from '../../languages/LanguagesContext.ts'
import { languages } from '../../languages/languages.ts'
import { Navigation } from '../../assets/Navigation.tsx'
import { MOBILE_WIDTH } from '../../assets/constants.ts'

const SWITCH_WIDTH = '120px'
const HAMBURGER_SIZE = 24

const AppContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    background-color: ${({ theme }) => theme.backgroundColour};
    color: ${({ theme }) => theme.fontColour};
    
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`

const Container = styled.div<{ isVisible: boolean }>`
    background: ${({ theme }) => theme.secondaryColour };
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    width: 100vw; // mobile-only
    top: 0;
    padding-top: ${HAMBURGER_SIZE + 10}px;
    margin-left: ${({ isVisible }) => (isVisible ? 0 : -100) + '%'};
    transition: margin-left 0.1s;
    @media only screen and (min-width: ${MOBILE_WIDTH}px) {
        width: ${SWITCH_WIDTH};
        margin-left: ${({ isVisible }) => (isVisible ? 0 : '-' + SWITCH_WIDTH)};
    }
`
const HamburgerContainer = styled.div<{ isVisible: boolean }>`
    background: white;
    padding: ${({theme}) => theme.padding};
    width: ${HAMBURGER_SIZE}px;
    height: ${HAMBURGER_SIZE}px;
    position: absolute;
    top: 0;
    margin-left: ${({ isVisible }) => (isVisible ? 0 : 100) + '%'};
    @media only screen and (min-width: ${MOBILE_WIDTH}px) {
        margin-left: ${SWITCH_WIDTH};
    }
`
const ItemContainer = styled.div`
    flex-grow: 1;
    flex-basis: ${SWITCH_WIDTH};
`

export type SidebarProps = {
    theme: {
        selectedTheme: theme
        handleThemePress: () => void
    }
}

export const Sidebar = ({
    theme: { selectedTheme, handleThemePress }
}: SidebarProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const { language, handleLangPress } = use(LanguagesContext)
    const toggleVisibility = () => setIsVisible(prevVisible => !prevVisible)

    const RenderHamburger = () => (
        <HamburgerContainer onClick={toggleVisibility} isVisible={isVisible}>
            <Hamburger
                strokeWidth={4}
                height={HAMBURGER_SIZE}
                width={HAMBURGER_SIZE}
            />
        </HamburgerContainer>
    )

    return (
        <AppContainer>
            <Container isVisible={isVisible}>
                <RenderHamburger />
                <ItemContainer>
                    <Navigation/>
                </ItemContainer>
                <ItemContainer>
                    <Switch
                        checked={selectedTheme === theme.dark}
                        onSwitch={handleThemePress}
                        label={{left: '🌘', right: '☀️'}}
                    />
                    <Switch
                        checked={language === languages.en}
                        onSwitch={handleLangPress}
                        label={{left: 'UK', right: 'TH'}}
                    />
                </ItemContainer>
            </Container>
            <Outlet/>
        </AppContainer>
    )
}