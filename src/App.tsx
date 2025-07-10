import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/homepage/Home.tsx'
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
  useEffect(displayAnimatedFaviconIfBrowserNotChrome)

  const handleThemePress = () => document.documentElement.classList.toggle('dark')

  return (
      <LanguagesProvider>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Sidebar handleThemePress={handleThemePress}/>}>
                <Route index element={<Home />}/>
                <Route path='cv' element={<Cv/>}/>
                <Route path='*' element={<ErrorPage/>}/>
              </Route>
          </Routes>
        </BrowserRouter>
      </LanguagesProvider>
  )
}

export default App
