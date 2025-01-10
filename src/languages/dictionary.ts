import { languages } from './languages.ts'
import { Dictionaries } from './types/Dictionaries.ts'

export const dictionary: Dictionaries = {
    [languages.en]: {
        'sorry': 'Sorry',
        'error': 'Nothing to see here'
    },
    [languages.th]: {
        'sorry': 'ขอโทษ',
        'error': 'ไม่มีที่นี่'
    },
}