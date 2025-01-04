import styled from 'styled-components'
import { Switch } from '../../assets/Switch.tsx'
import { languages } from '../../assets/languages.ts'
import { theme } from '../../theme/theme.ts'

const SWITCH_WIDTH = '120px'
const MOBILE_WIDTH = '480px'

const Container = styled.div`
    background: ${({ theme }) => theme.secondaryColour };
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    width: 100%; // mobile-only
    height: 100%; // mobile-only
    top: 0;
    bottom: 0;
    padding-top: 200px; // TODO better padding
    @media only screen and (min-width: ${MOBILE_WIDTH}) {
        width: ${SWITCH_WIDTH};
        height: unset;
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
    return (
        <Container>
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
    )
}