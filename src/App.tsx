import { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './theme/theme'
import { Home } from './pages/homepage/Home'
import { Switch } from './assets/Switch'
import { languages, setLanguage, setUpLanguages } from './assets/languages'

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
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

const displayAnimatedFaviconIfBrowserNotChrome = () => {
  const userAgentString = navigator.userAgent
  const isChrome = userAgentString.indexOf("Chrome") > -1
  const faviconElement: any = document.querySelector('link[rel=icon]')
  if (!isChrome && !!faviconElement) {
    faviconElement.href = '/src/assets/daw.gif'
    faviconElement.type = 'image/gif'
  }
}

enum theme {
  light = 'LIGHT_THEME',
  dark = 'DARK_THEME',
}

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState<theme>(theme.light)
  const [selectedLang, setSelectedLang] = useState<languages>(languages.en)
  useEffect(displayAnimatedFaviconIfBrowserNotChrome)
  useEffect(setUpLanguages)

  const handleThemePress = () => setSelectedTheme(prevTheme => prevTheme === theme.light ? theme.dark : theme.light)
  const handleLangPress = () => setSelectedLang(prevLang => {
    const newLang = prevLang === languages.en ? languages.th : languages.en
    setLanguage(newLang)
    return newLang
  })

  return (
    <ThemeProvider theme={selectedTheme === theme.light ? lightTheme : darkTheme}>
      <Container>
        <Home />
        <Switch checked={selectedTheme === theme.dark} onSwitch={handleThemePress} label={{ left: '🌘', right: '☀️' }} />
        <Switch checked={selectedLang === languages.en} onSwitch={handleLangPress} label={{ left: 'UK', right: 'TH' }} />
      </Container>
    </ThemeProvider>
  )
}

export default App
