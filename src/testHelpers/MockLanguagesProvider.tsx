import { MockElementPropsType } from './MockElementPropsType.ts'
import { LanguagesContext } from '../languages/LanguagesContext.ts'
import { LangContext } from '../languages/types/LanguagesContext.ts'

export const MockLanguagesProvider = ({ children, value }: MockElementPropsType<{ value: LangContext }>) => (
    <LanguagesContext value={value}>
        {children}
    </LanguagesContext>
)
