import { DefaultTheme } from 'styled-components'

const commonTheme: DefaultTheme = {
    padding: '5px',
    switchOnColour: 'green',
    switchOffColour: 'grey',
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
