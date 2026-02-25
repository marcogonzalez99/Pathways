export interface SocialLink {
    icon: string
    link: string
}

export interface Card {
    image: string
    text: string
    alt: string
    link: string
}

export interface PageData {
    header_image: string
    profile_image: string
    name: string
    tagline: string
    social_links: SocialLink[]
    cards: Card[]
    section_label: string
    section_link: string
}

export const indexData: PageData = {    
    header_image: "/images/headers/main_profile_header.jpg",
    profile_image: "/images/logos/main_logo.png",
    name: "Marco Gonzalez",
    tagline: "Developer | Artist | Builder",
    social_links: [
        {icon: 'github', link: 'https://github.com/marcogonzalez99'},       
        {icon: 'instagram', link: 'https://www.instagram.com/_marcogonzalez'},
        {icon: 'linkedin', link: 'https://www.linkedin.com/in/marco-a-gonzalez99/'}
    ],
    cards: [
        {    
            image: "/images/cards/shineburst_card.jpg",
            text: "Listen to my Music!",
            alt: "Shineburst on Apple Music",
            link: "https://music.apple.com/us/artist/shineburst/1559045496"
        },
        {    
            image: "/images/cards/shineburst_card.jpg",
            text: "Check out My Game Engine!",
            alt: "Polaris Kit Game Engine",
            link: "https://ko-fi.com/s/523b453cae"
        },
        {    
            image: "/images/cards/shineburst_card.jpg",
            text: "Watch me Climb to a V8!",
            alt: "Sky Holds Instagram Page",
            link: "https://www.instagram.com/sky.holds/"
        }   
    ],
    section_label: "string",
    section_link: "string"
}

export const shineburstData: PageData = {
    header_image: "/images/headers/shineburst_header.jpg",
    profile_image: "/images/logos/shineburst_logo.png",
    name: "Shineburst",
    tagline: "Connecting Others Through Sound",
    social_links: [
        {icon: 'github', link: 'https://github.com/marcogonzalez99'},       
        {icon: 'instagram', link: 'https://www.instagram.com/_marcogonzalez'},
        {icon: 'linkedin', link: 'https://www.linkedin.com/in/marco-a-gonzalez99/'}
    ],
    cards: [],
    section_label: "string",
    section_link: "string"
}

export const polarisData: PageData = {
    header_image: "/images/headers/polaris_studios_header.jpg",
    profile_image: "/images/logos/polaris_studios_logo.png",
    name: "Polaris Studios",
    tagline: "Imagination Going Beyond",
    social_links: [
        {icon: 'github', link: 'https://github.com/marcogonzalez99'},       
        {icon: 'instagram', link: 'https://www.instagram.com/_marcogonzalez'},
        {icon: 'linkedin', link: 'https://www.linkedin.com/in/marco-a-gonzalez99/'}
    ],
    cards: [],
    section_label: "string",
    section_link: "string"
}

export const skyholdsData: PageData = {
    header_image: "/images/headers/skyholds_header.jpg",
    profile_image: "/images/logos/skyholds_logo.png",
    name: "Sky Holds",
    tagline: "Always Reaching Higher",
    social_links: [
        {icon: 'github', link: 'https://github.com/marcogonzalez99'},       
        {icon: 'instagram', link: 'https://www.instagram.com/_marcogonzalez'},
        {icon: 'linkedin', link: 'https://www.linkedin.com/in/marco-a-gonzalez99/'}
    ],
    cards: [],
    section_label: "string",
    section_link: "string"
}