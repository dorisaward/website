import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { darkTheme, lightTheme, theme } from './theme/theme'
import { Home } from './pages/homepage/Home'
import { Sidebar } from './pages/sidebar/Sidebar.tsx'
import { LanguagesProvider } from './languages/LanguagesProvider.tsx'
import { ErrorPage } from './pages/error/Error.tsx'
import { Cv } from './pages/cv/Cv.tsx'

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
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Sidebar theme={{ selectedTheme, handleThemePress }}/>}>
                <Route index element={<Home />}/>
                <Route path='cv' element={<Cv/>}/>
                <Route path='*' element={<ErrorPage/>}/>
              </Route>
          </Routes>
        </BrowserRouter>
      </LanguagesProvider>
    </ThemeProvider>
  )
}

export default App
