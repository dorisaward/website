import { languages } from '../languages.ts'
import { Dictionary } from './Dictionary.ts'

export type Dictionaries = Record<languages, Record<Dictionary, string>>