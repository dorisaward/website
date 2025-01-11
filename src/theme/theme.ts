import { DefaultTheme } from 'styled-components'

export enum theme {
    light = 'LIGHT_THEME',
    dark = 'DARK_THEME',
}

const commonTheme: Pick<DefaultTheme, 'padding'
    | 'switchOnColour'
    | 'switchOffColour'
    | 'shadowColour'
> = {
    padding: '5px',
    switchOnColour: 'green',
    switchOffColour: 'grey',
    shadowColour: 'chocolate',
}

export const lightTheme: DefaultTheme = {
    ...commonTheme,
    backgroundColour: '#CCE6FF',
    secondaryColour: '#FFCCE6',
    tertiaryColour: '#E6FFCC',
    fontColour: 'black'
}

export const darkTheme: DefaultTheme = {
    ...commonTheme,
    backgroundColour: '#214269',
    secondaryColour: '#692142',
    tertiaryColour: '#426921',
    fontColour: 'white'
}
