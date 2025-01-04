import styled from 'styled-components'
import { Switch } from '../../assets/Switch.tsx'
import { languages } from '../../assets/languages.ts'
import { theme } from '../../theme/theme.ts'

const Container = styled.div`
    background: ${({ theme }) => theme.secondaryColour };
    display: flex;
    flex-wrap: wrap;
    
`
const ItemContainer = styled.div`
    flex-grow: 1;
    flex-basis: 120px;
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