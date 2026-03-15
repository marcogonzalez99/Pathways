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

export const indexData: PageData = {    
    header_image: "/images/headers/main_profile_header.jpg",
    profile_image: "/images/logos/main_logo.png",
    name: "Marco Gonzalez",
    tagline: "Developer | Artist | Builder",
    description: "Welcome to my personal link page! Here you can find all of my projects and social media in one place. Feel free to explore and connect with me!",
    accent_color: "#4A90D9",
    social_links: [
        {icon: 'github', link: 'https://github.com/marcogonzalez99', label: 'GitHub'},       
        {icon: 'instagram', link: 'https://www.instagram.com/_marcogonzalez', label: 'Instagram'},
        {icon: 'linkedin', link: 'https://www.linkedin.com/in/marco-a-gonzalez99/', label: 'LinkedIn'}
    ],
    cards: [
        {    
            image: "/images/cards/apple_music.jpg",
            text: "Listen to my Music!",
            alt: "Shineburst on Apple Music",
            link: "https://music.apple.com/us/artist/shineburst/1559045496"
        },
        {    
            image: "/images/cards/polaris.png",
            text: "Check out My Game Engine!",
            alt: "Polaris Kit Game Engine",
            link: "https://ko-fi.com/s/523b453cae"
        },
        {    
            image: "/images/cards/instagram.png",
            text: "Watch me Climb to a V8!",
            alt: "Sky Holds Instagram Page",
            link: "https://www.instagram.com/sky.holds/"
        }   
    ],
    sections: [
        {icon:"/images/logos/shineburst_logo.png", text: "Shineburst", link: "/shineburst"},
        {icon:"/images/logos/polaris_studios_logo.png", text: "Polaris Studios", link: "/polaris"},
        {icon:"/images/logos/skyholds_logo.png", text: "Sky Holds", link: "/skyholds"}
    ]
}

export const shineburstData: PageData = {
    header_image: "/images/headers/shineburst_header.jpg",
    profile_image: "/images/logos/shineburst_logo.png",
    name: "Shineburst",
    tagline: "Connecting Others Through Sound",
    description: "Shineburst is my music project where I create a blend of electronic and indie music. My goal is to connect with others through my sound and share my passion for music. Check out my latest releases and follow me on Spotify and Apple Music!",
    accent_color: "#9B59B6",
    social_links: [
        {icon: 'instagram', link: 'https://www.instagram.com/_marcogonzalez', label: 'Instagram'},
    ],
    cards: [
        {    
            image: "/images/cards/spotify.jpg",
            text: "Follow Me On Spotify!",
            alt: "Shineburst on Spotify",
            link: "https://open.spotify.com/artist/2dsDkMLqRajMnPomQNYs1B"
        },
        {    
            image: "/images/cards/youtube.jpg",
            text: "Check Out My Visualizers",
            alt: "Shineburst on YouTube",
            link: "https://www.youtube.com/@Shineburst/shorts"
        },
        {    
            image: "/images/cards/apple_music.jpg",
            text: "Listen On Apple Music!",
            alt: "Shineburst on Apple Music",
            link: "https://music.apple.com/us/artist/shineburst/1559045496"
        }   
    ],
    sections: [
        {icon:"/images/logos/main_logo.png", text: "Personal", link: "/"},
        {icon:"/images/logos/polaris_studios_logo.png", text: "Polaris Studios", link: "/polaris"},
        {icon:"/images/logos/skyholds_logo.png", text: "Sky Holds", link: "/skyholds"}
    ]
}

export const polarisData: PageData = {
    header_image: "/images/headers/polaris_studios_header.jpg",
    profile_image: "/images/logos/polaris_studios_logo.png",
    name: "Polaris Studios",
    tagline: "Imagination Going Beyond",
    description: "Polaris Studios is my game development project where I create games and a game engine called Polaris Kit. My goal is to bring imagination to life through interactive experiences. Check out my latest projects and follow me on YouTube for dev builds and updates!",
    accent_color: "#F39C12",
    social_links: [
        {icon: 'github', link: 'https://github.com/marcogonzalez99', label: 'GitHub'},  
        {icon: 'instagram', link: 'https://www.instagram.com/sbstudios.project', label: 'Instagram'},     
    ],
    cards: [
        {    
            image: "/images/cards/kofi.png",
            text: "Support me on Kofi!",
            alt: "Polaris Studios on Ko-fi",
            link: "https://ko-fi.com/sbstudios"
        },
        {    
            image: "/images/cards/polaris.png",
            text: "Check out My Game Engine!",
            alt: "Polaris Kit Game Engine",
            link: "https://ko-fi.com/s/523b453cae"
        },
        {    
            image: "/images/cards/youtube.jpg",
            text: "Follow Dev Builds!",
            alt: "Polaris Studios Youtube Page",
            link: "https://www.youtube.com/@SBStudiosProject/shorts"
        }   
    ],
    sections: [
        {icon:"/images/logos/main_logo.png", text: "Personal", link: "/"},
        {icon:"/images/logos/shineburst_logo.png", text: "Shineburst", link: "/shineburst"},
        {icon:"/images/logos/skyholds_logo.png", text: "Sky Holds", link: "/skyholds"}
    ]
}

export const skyholdsData: PageData = {
    header_image: "/images/headers/skyholds_header.jpg",
    profile_image: "/images/logos/skyholds_logo.png",
    name: "Sky Holds",
    tagline: "Always Reaching Higher",
    description: "Sky Holds is my climbing project where I document my climbing journey and share tips and tricks for climbers of all levels. My goal is to inspire others to reach new heights and push their limits. Check out my latest climbs and follow me on Instagram for updates!",
    accent_color: "#27AE60",
    social_links: [
        {icon: 'instagram', link: 'https://www.instagram.com/_marcogonzalez', label: 'Instagram'},
    ],
    cards: [
        {    
            image: "/images/cards/youtube.jpg",
            text: "Watch My Shorts!",
            alt: "Sky Holds Youtube Page",
            link: "https://www.youtube.com/@SkyHoldsYT/shorts"
        },
        {    
            image: "/images/cards/instagram.png",
            text: "Watch My First V7!",
            alt: "Sky Holds V7 Climb",
            link: "https://www.youtube.com/shorts/N1xXPxFUowQ"
        },
        {    
            image: "/images/cards/instagram.png",
            text: "Random Climb!",
            alt: "Sky Holds Random Short",
            link: "https://www.youtube.com/shorts/GtADGUb_SKo"
        },
    ],
    sections: [
        {icon:"/images/logos/main_logo.png", text: "Personal", link: "/"},
        {icon:"/images/logos/shineburst_logo.png", text: "Shineburst", link: "/shineburst"},
        {icon:"/images/logos/polaris_studios_logo.png", text: "Polaris Studios", link: "/polaris"}
    ]
}