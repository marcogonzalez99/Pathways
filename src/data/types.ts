export interface SocialLink {
    icon: string
    link: string
    label: string
}

export interface Card {
    image: string
    text: string
    alt: string
    link: string
    tags?: string[]
}

export interface Section {
    icon: string
    text: string
    link: string
}

export interface PageData {
    header_image: string
    profile_image: string
    name: string
    tagline: string
    description: string
    accent_color: string
    social_links: SocialLink[]
    cards: Card[]
    sections: Section[]
}
