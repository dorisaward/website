import { use } from 'react'
import styled from 'styled-components'
import * as cv from '../../assets/cv.json'
import { images } from './logos'
import { LanguagesContext } from '../../languages/LanguagesContext.ts'
import { languages } from '../../languages/languages.ts'
import { MOBILE_WIDTH } from '../../assets/constants.ts'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({theme}) => theme.padding};
`

const TextContainer = styled.div`
    max-width: ${MOBILE_WIDTH}px;
    white-space: pre-wrap;
`

const ImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    max-width: 100vw;
`

const StyledImg = styled.img`
    height: 50px;
    padding: ${({theme}) => theme.padding};
`

type CvRow = {
    heading: string
    text: string
}

export const Cv = () => {
    const { language } = use(LanguagesContext)

    const cvJson: Array<CvRow> = cv.data

    return (
        <Container>
            {language === languages.th && <p>Unfortunately, Thai language is not available</p>}
            <h1>Curriculum Vitae</h1>
            {cvJson.map(({ heading, text }) => (
                <TextContainer>
                    <h2>{heading}</h2>
                    <p>{text}</p>
                </TextContainer>
            ))}
            <ImgContainer>
                {images.map((image, i) => (<StyledImg key={i} src={image} /> ))}
            </ImgContainer>
        </Container>
    )
}