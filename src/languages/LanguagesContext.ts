import { createContext } from 'react'
import { languages } from './languages.ts'
import { LangContext } from './types/LanguagesContext.ts'

export const LanguagesContext = createContext<LangContext>({
    language: languages.en,
    getText: () => '',
    handleLangPress: () => {},
})