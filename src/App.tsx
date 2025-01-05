import { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme, theme } from './theme/theme'
import { Home } from './pages/homepage/Home'
import { Sidebar } from './pages/sidebar/Sidebar.tsx'
import { LanguagesProvider } from './languages/LanguagesProvider.tsx'

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
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

const displayAnimatedFaviconIfBrowserNotChrome = () => {
  const userAgentString = navigator.userAgent
  const isChrome = userAgentString.indexOf("Chrome") > -1
  const faviconElement: any = document.querySelector('link[rel=icon]')
  if (!isChrome && !!faviconElement) {
    faviconElement.href = '/src/assets/daw.gif'
    faviconElement.type = 'image/gif'
  }
}

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState<theme>(theme.light)
  useEffect(displayAnimatedFaviconIfBrowserNotChrome)

  const handleThemePress = () => setSelectedTheme(prevTheme => prevTheme === theme.light ? theme.dark : theme.light)

  return (
    <ThemeProvider theme={selectedTheme === theme.light ? lightTheme : darkTheme}>
      <LanguagesProvider>
        <Container>
          <Home />
          <Sidebar theme={{ selectedTheme, handleThemePress }}/>
        </Container>
      </LanguagesProvider>
    </ThemeProvider>
  )
}

export default App
