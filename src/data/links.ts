export interface SocialLinks {
    github?: string
    instagram?: string
    linkedin?: string
}

export interface Card {
    image: string
    title: string
    description: string
    footer_text: string
    link: string
}

export interface PageData {
    header_image: string
    profile_image: string
    name: string
    tagline: string
    social_links: SocialLinks
    cards: Card[]
    section_label: string
    section_link: string
}

export const indexData: PageData = {    
    header_image: "string",
    profile_image: "string",
    name: "Marco Gonzalez",
    tagline: "string",
    social_links: {
        github : 'false',
        instagram : 'false',
        linkedin : 'false'
    },
    cards: [],
    section_label: "string",
    section_link: "string"
}

export const shineburstData: PageData = {
    header_image: "string",
    profile_image: "string",
    name: "Shineburst",
    tagline: "string",
    social_links: {
        github : 'false',
        instagram : 'false',
        linkedin : 'false'
    },
    cards: [],
    section_label: "string",
    section_link: "string"
}

export const polarisData: PageData = {
    header_image: "string",
    profile_image: "string",
    name: "Polaris Studios",
    tagline: "string",
    social_links: {
        github : 'false',
        instagram : 'false',
        linkedin : 'false'
    },
    cards: [],
    section_label: "string",
    section_link: "string"
}

export const skyholdsData: PageData = {
    header_image: "string",
    profile_image: "string",
    name: "Sky Holds",
    tagline: "string",
    social_links: {
        github : 'false',
        instagram : 'false',
        linkedin : 'false'
    },
    cards: [],
    section_label: "string",
    section_link: "string"
}