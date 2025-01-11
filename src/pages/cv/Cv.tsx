import { use } from 'react'
import { LanguagesContext } from '../../languages/LanguagesContext.ts'
import { languages } from '../../languages/languages.ts'

export const Cv = () => {
    const { language } = use(LanguagesContext)
    return (
        <>
            {language === languages.th && <p>Unfortunately, Thai language is not available</p>}
            <p>Curriculum Vitae</p>
        </>
    )
}