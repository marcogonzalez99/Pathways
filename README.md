<img src="images/readme/Pathways_Logo.png" width="100%">

# Pathways

Welcome to **Pathways**, my personal self-hosted link hub.

## 🌟 What is Pathways?

It's a simple, minimal site where you can find all the important links I want to share in one place. The site is built with Astro and styled with Tailwind CSS, featuring a dark mode toggle and a responsive design that works well on both desktop and mobile. Each of my main identities (Personal, Music, Bouldering, Game Dev) has its own dedicated pathway page, where I highlight a featured project and provide links to relevant social media profiles and platforms.

## ✨ Features

- Responsive layout with mobile-first design
- Dark and light theme toggle
- Dedicated pathway pages per identity (Personal, Music, Bouldering, Game Dev)
- Highlight cards showcasing a featured project per pathway
- Link data driven by a typed TypeScript data file — no hardcoding required

<!-- ## 🚀 Live Site

Live Site link will go here once it's ready -->

## 🗂️ Project Structure

```
src/
├── components/
│   ├── LinkCard.astro
│   ├── ProfileCard.astro
│   └── SocialButtons.astro
├── data/
│   └── links.ts
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── shineburst.astro
│   ├── skyholds.astro
│   └── polaris.astro
└── styles/
    └── global.css
```

## 📦 Built With

- **Astro** for static site generation
- **Tailwind CSS** for styling, including dark mode support
- **TypeScript** for typed data management (`links.ts`)
- Hosted on **GitHub Pages**

## 💡 Ideas, Thought Process & Findings

This section documents the research, design decisions, and learnings made throughout the development of Pathways.

### Design (Iteration 1)
<img src="images/readme/Version_1.png" width="75%">

#### Findings & Learnings
For this first iteration, I tried to focus on the color scheme first. I aimed to choose my palette before I focused on the design and layout. One thing I did wrong during this step, was just assume a left/right side layout would work without thinking what each side's content would contain. Another thing I did not consider here, was the smaller device design. There were too many things to consider during this stage, therefore I decided this plan was not worth pursuing.

### Design (Iteration 2)
<img src="images/readme/Version_2.png" width="75%">

#### Findings & Learnings
For design 2, I tried a single column view, which would in the long run give me an easier time working on the mobile view, as that would most likely also be 1 column. The issue with this iteration would be the large chunks of dead space on the desktop version. With no good idea on how to proceed, I decided to move on from this version

### Design (Iteration 3)
<img src="images/readme/Version_3.png" width="75%">

#### Findings & Learnings
For version 3, I went back to the original idea of the 2 column design. This time, I was thinking of having preview cards when someone clicked on one of the links. For example, here I have LinkedIn selected, which opens a preview of my Linkedin Profile. This idea failed because the preview added an extra step to actually navigate. Another reason why this failed was due to the outdated design, and felt very flat.

### Design (Iteration 4)
<img src="images/readme/Version_4.png" width="75%">

#### Findings & Learnings
This iteration attempted to build upon the 2 column idea, with a new style for the right side. Instead of a preview, I tried to move the navigation buttons to this side. This looked good in theory, but in combination with the chosen colors, it did not work as well as I was anticipating

### Design (Iteration 5)
<img src="images/readme/Version_5.png" width="40%">

#### Findings & Learnings
For this version, the goal was to create a mobile version first, and then convert it to the desktop version second. With this, I looked into different websites that provide drag and drop templates for inspiration. I landed on the idea of a nice hero image on top, with a circle profile picture as the centerpiece. This version worked well, however I preferred using cards instead of just buttons.

## 🏆 Final Design
<img src="images/readme/Version_6_Light.png" width="40%">
<img src="images/readme/Version_6_Dark.png" width="40%">
<img src="images/readme/Version_6_Mobile.png" width="40%">

The final design uses a card-based layout that works consistently across both mobile and desktop. Each pathway has its own dedicated page, sharing the same structure but with a unique header and hero image, featuring a highlighted project card alongside a fixed set of social links.

Page data is managed through typed TypeScript data, keeping content updates straightforward and decoupled from the component structure.

### Marco
<img src="images/readme/MG_Light_Desktop.png" width="40%">
<img src="images/readme/MG_Dark_Desktop.png" width="40%">
<img src="images/readme/MG_Light_Mobile.png" width="20%">
<img src="images/readme/MG_Dark-Mobile.png" width="20%">

### Shineburst
<img src="images/readme/SB_Light_Desktop.png" width="40%">
<img src="images/readme/SB_Dark_Desktop.png" width="40%">
<img src="images/readme/SB_Light_Mobile.png" width="20%">
<img src="images/readme/SB_Dark_Mobile.png" width="20%">

### SkyHolds
<img src="images/readme/SH_Light_Desktop.png" width="40%">
<img src="images/readme/SH_Dark_Desktop.png" width="40%">
<img src="images/readme/SH_Light_Mobile.png" width="20%">
<img src="images/readme/SH_Dark_Mobile.png" width="20%">

### PolarisStudios
<img src="images/readme/PS_Light_Desktop.png" width="40%">
<img src="images/readme/PS_Dark_Desktop.png" width="40%">
<img src="images/readme/PS_Light_Mobile.png" width="20%">
<img src="images/readme/PS_Dark_Mobile.png" width="20%">


## 🗺️ Roadmap

Potential future pathways to add:

- Gaming channel
- Baking or astrophotography
- Projects showcase (PolarisKit, Pong)
- Blog
