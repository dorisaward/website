type CvLocation = {
    city: string
    countryCode: string
}

type CvProfile ={
    network: string
    username: string
    url: string
}

type CvBasics = {
    name: string
    label: string
    email: string
    url: string
    summary: string
    phone: string
    location: CvLocation
    profiles: CvProfile[]
}

type CvWork = {
    name: string
    position: string
    url: string
    startDate: string
    endDate?: string
    summary: string
}

type CvEducation = {
    institution: string
    url: string
    area: string
    studyType: string
    startDate: string
    endDate: string
}

type CvSkill = {
    name: string
    level: string
    keywords: string[]
}

type CvLanguage = {
    language: string
    fluency: string
}

export type CvSchema = {
    basics: CvBasics
    work: CvWork[]
    education: CvEducation[]
    skills: CvSkill[]
    languages: CvLanguage[]
}
