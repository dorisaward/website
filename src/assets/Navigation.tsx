import { Link } from 'react-router-dom'
import { PropsWithChildren, use } from 'react'
import { LanguagesContext } from '../languages/LanguagesContext.ts'

const StyledNav = ({ children }: PropsWithChildren) =>
  <nav className={'flex flex-col justify-evenly h-full'}>{children}</nav>

const LinkButton = ({ children }: PropsWithChildren) =>
  <div className={'p-1 m-2 bg-3 rounded-md shadow-chocolate active:shadow-none'}>{children}</div>

export const Navigation = () => {
    const { getText } = use(LanguagesContext)
    return (
        <StyledNav>
            <Link to="/"><LinkButton>{getText('home')}</LinkButton></Link>
            <Link to="/cv"><LinkButton>{getText('cv')}</LinkButton></Link>
        </StyledNav>
    )
}
