import { languages } from './languages.ts'
import { Dictionaries } from './types/Dictionaries.ts'

export const dictionary: Dictionaries = {
    [languages.en]: {
        'sorry': 'Sorry',
        'hello': 'Hello!',
        'error': 'Nothing to see here',
        'home': 'Home',
        'cv': 'Curriculum Vitae',
    },
    [languages.th]: {
        'sorry': 'ขอโทษ',
        'hello': 'สวัสดี',
        'error': 'ไม่มีที่นี่',
        'home': 'บ้าน',
        'cv': 'ประวัติย่อ',
    },
}