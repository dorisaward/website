import { use } from 'react'
import { LanguagesContext } from '../../languages/LanguagesContext.ts'

export const ErrorPage = () => {
    const { getText } = use(LanguagesContext)
    return (
        <p>{getText('error')}</p>
    )
}