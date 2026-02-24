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
    header_image: "/images/main_profile_header.jpg",
    profile_image: "/images/shineburst_logo.png",
    name: "Marco Gonzalez",
    tagline: "Developer | Artist | Builder",
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
    header_image: "/images/shineburst_header.jpg",
    profile_image: "/images/shineburst_logo.png",
    name: "Shineburst",
    tagline: "Connecting Others Through Sound",
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
    header_image: "/images/polaris_studios_header.jpg",
    profile_image: "/images/polaris_studios_logo.png",
    name: "Polaris Studios",
    tagline: "Imagination Going Beyond",
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
    header_image: "/images/skyholds_header.jpg",
    profile_image: "/images/skyholds_logo.png",
    name: "Sky Holds",
    tagline: "Always Reaching Higher",
    social_links: {
        github : 'false',
        instagram : 'false',
        linkedin : 'false'
    },
    cards: [],
    section_label: "string",
    section_link: "string"
}