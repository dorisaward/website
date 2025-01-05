import { FC, useState, useEffect, ReactNode, useMemo } from 'react'
import { I18n } from 'aws-amplify/utils'
import { Dictionary } from './types/Dictionary.ts'
import { dictionary } from './dictionary.ts'
import { languages } from './languages.ts'
import { LanguagesContext } from './LanguagesContext.ts'
import { LangContext } from './types/LanguagesContext.ts'

const setLanguage = I18n.setLanguage

const setUpLanguages = () => {
    I18n.putVocabularies(dictionary)
    setLanguage(languages.en)
}

export const LanguagesProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedLang, setSelectedLang] = useState<languages>(languages.en)
    useEffect(setUpLanguages, [])

    const value = useMemo<LangContext>(() => ({
        language: selectedLang,
        getText: (key: Dictionary) => I18n.get(key),
        handleLangPress: () => setSelectedLang(prevLang => {
            const newLang = prevLang === languages.en ? languages.th : languages.en
            setLanguage(newLang)
            return newLang
        })
    }), [ selectedLang ])

    return (
        <LanguagesContext value={value}>
            {children}
        </LanguagesContext>
    )
}