import styled from 'styled-components'
import { useState } from 'react'
import { Switch } from '../../assets/Switch.tsx'
import { languages } from '../../assets/languages.ts'
import { theme } from '../../theme/theme.ts'
import { Hamburger } from '../../assets/Hamburger.tsx'

const SWITCH_WIDTH = '120px'
const MOBILE_WIDTH = '480px'
const HAMBURGER_SIZE = 24

const Container = styled.div`
    background: ${({ theme }) => theme.secondaryColour };
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    width: 100%; // mobile-only
    height: 100%; // mobile-only
    top: 0;
    bottom: 0;
    padding-top: ${HAMBURGER_SIZE}px;
    @media only screen and (min-width: ${MOBILE_WIDTH}) {
        width: ${SWITCH_WIDTH};
        height: unset;
    }
    animation: slideIn 0.1s;
    @keyframes slideIn {
        from { margin-left: -100%; }
        to { margin-left: 0; }
    }
`
const HamburgerContainer = styled.div<{ isVisible: boolean }>`
    background: white;
    padding: ${({theme}) => theme.padding};
    width: ${HAMBURGER_SIZE}px;
    height: ${HAMBURGER_SIZE}px;
    left: 0; // on mobile stays at top left
    position: absolute;
    top: 0;

    @media only screen and (min-width: ${MOBILE_WIDTH}) {
        ${({isVisible}) => isVisible && {
            left: SWITCH_WIDTH, // moves with sidebar
        }
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
    },
    lang: {
        selectedLang: languages
        handleLangPress: () => void
    }
}

export const Sidebar = ({
    theme: { selectedTheme, handleThemePress },
    lang: { selectedLang, handleLangPress },
}: SidebarProps) => {
    const [isVisible, setIsVisible] = useState(false)
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

    return isVisible ? (
        <Container>
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
                    checked={selectedLang === languages.en}
                    onSwitch={handleLangPress}
                    label={{left: 'UK', right: 'TH'}}
                />
            </ItemContainer>
        </Container>
    ) : <RenderHamburger />
}