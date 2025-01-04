import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        padding: string
        switchOnColour: string
        switchOffColour: string
        backgroundColour: string
        secondaryColour: string
        tertiaryColour: string
        fontColour: string
    }
}