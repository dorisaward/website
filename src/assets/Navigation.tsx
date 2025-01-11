import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { use } from 'react'
import { LanguagesContext } from '../languages/LanguagesContext.ts'

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 70%;

    a:link { text-decoration: none; }
    a:visited { text-decoration: none; }
    a:hover { text-decoration: none; }
    a:active { text-decoration: none; }
`

const LinkContainer = styled.div`
    padding: ${({theme}) => theme.padding};
    margin: ${({theme}) => theme.padding};
    background-color: ${({theme}) => theme.tertiaryColour};
    border-radius: ${({theme}) => theme.padding};
    box-shadow: ${({theme}) => '1px 1px ' + theme.shadowColour};

    &:active { box-shadow: unset; }
`

export const Navigation = () => {
    const { getText } = use(LanguagesContext)
    return (
        <StyledNav>
            <LinkContainer><Link to="/">{getText('home')}</Link></LinkContainer>
            <LinkContainer><Link to="/cv">{getText('cv')}</Link></LinkContainer>
        </StyledNav>
    )
}
