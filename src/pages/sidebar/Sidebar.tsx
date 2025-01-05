import styled from 'styled-components'
import { use, useState } from 'react'
import { Switch } from '../../assets/Switch.tsx'
import { theme } from '../../theme/theme.ts'
import { Hamburger } from '../../assets/Hamburger.tsx'
import { LanguagesContext } from '../../languages/LanguagesContext.ts'
import { languages } from '../../languages/languages.ts'

const SWITCH_WIDTH = '120px'
const MOBILE_WIDTH = '480px'
const HAMBURGER_SIZE = 24

const Container = styled.div<{ isVisible: boolean }>`
    background: ${({ theme }) => theme.secondaryColour };
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    width: 100%; // mobile-only
    height: 100%; // mobile-only
    top: 0;
    bottom: 0;
    padding-top: ${HAMBURGER_SIZE}px;
    margin-left: ${({ isVisible }) => (isVisible ? 0 : -100) + '%'};
    transition: margin-left 0.1s;
    @media only screen and (min-width: ${MOBILE_WIDTH}) {
        width: ${SWITCH_WIDTH};
        height: unset;
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
    @media only screen and (min-width: ${MOBILE_WIDTH}) {
        margin-left: ${SWITCH_WIDTH};
    }
`
const ItemContainer = styled.div`
    flex-grow: 1;
    flex-basis: ${SWITCH_WIDTH};
`

type SidebarProps = {
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
        <Container isVisible={isVisible}>
            <RenderHamburger />
            <ItemContainer>
                <Switch
                    checked={selectedTheme === theme.dark}
                    onSwitch={handleThemePress}
                    label={{left: '🌘', right: '☀️'}}
                />
            </ItemContainer>
            <ItemContainer>
                <Switch
                    checked={language === languages.en}
                    onSwitch={handleLangPress}
                    label={{left: 'UK', right: 'TH'}}
                />
            </ItemContainer>
        </Container>
    )
}