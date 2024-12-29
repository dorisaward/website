import { I18n } from 'aws-amplify/utils'

export const setLanguage = I18n.setLanguage

export const getText = (key: Dictionary) => I18n.get(key)

export enum languages {
    en = 'ENGLISH',
    th = 'THAI',
  }

type Dictionary = 'sorry'

type Dictionaries = Record<languages, Record<Dictionary, string>>

export const dictionary: Dictionaries = {
    [languages.en]: {
        'sorry': 'Sorry'
    },
    [languages.th]: {
        'sorry': 'ขอโทษ'
    },
}

export const setUpLanguages = () => {
    I18n.putVocabularies(dictionary)
    setLanguage(languages.en)
}
