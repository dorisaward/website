import { languages } from '../languages.ts'
import { Dictionary } from './Dictionary.ts'

export type LangContext = {
    language: languages
    getText: (key: Dictionary) => string
    handleLangPress: () => void
}