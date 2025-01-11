import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        padding: string
        switchOnColour: string
        switchOffColour: string
        backgroundColour: string
        /**
         * Used for the sidebar background
         */
        secondaryColour: string
        /**
         * Used for the navigation button background
         */
        tertiaryColour: string
        /**
         * Used for the shadow for the navigation button
         */
        shadowColour: string
        fontColour: string
    }
}