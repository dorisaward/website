import { PropsWithChildren, use } from 'react'
import * as cv from '../../assets/cv.json'
import { images } from './logos'
import { LanguagesContext } from '../../languages/LanguagesContext.ts'
import { languages } from '../../languages/languages.ts'

const Container = ({ children }: PropsWithChildren) =>
  <div className={'flex flex-col items-center m-5'}>{children}</div>

const TextContainer = ({ children }: PropsWithChildren) =>
  <div className={'max-w-narrow whitespace-pre-wrap m-5'}>{children}</div>

const ImgContainer = ({ children }: PropsWithChildren) =>
  <div className={'flex flex-row overflow-x-scroll max-w-screen'}>{children}</div>

const StyledImg = ({ children, ...props }: PropsWithChildren<Pick<HTMLImageElement, 'src'>>) =>
  <img {...props} className={'h-12 p-1'} alt={props.src + ' logo'}>{children}</img>

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
            <h1 className={'text-3xl font-bold text-black dark:text-white'}>Curriculum Vitae</h1>
            {cvJson.map(({ heading, text }, i) => (
                <TextContainer key={i}>
                    <h2 className={'text-2xl font-semibold text-black dark:text-white m-5'}>{heading}</h2>
                    <p className={'text-black dark:text-white'}>{text}</p>
                </TextContainer>
            ))}
            <ImgContainer>
                {images.map((image, i) => (<StyledImg key={i} src={image} /> ))}
            </ImgContainer>
        </Container>
    )
}