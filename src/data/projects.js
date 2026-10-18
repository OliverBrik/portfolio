import card2ScreenImage from '@/assets/imgs/BLHheaderimg.jpg'
import card3ScreenImage from '@/assets/imgs/portfoliopage.jpg'
import miniMeClassImage from '@/assets/imgs/miniMeClasspic.jpg'

export const projects = [
    {
        id: 6,
        title: 'Mikkelborg Kro',
        year: '2026',
        role: 'Branding + Visuel identitet',
        summary:
            'Designproces for en samlet visuel identitet til Mikkelborg Kro med fokus på logo, farver og anvendelse på forskellige materialer.',
        tools: ['Illustrator', 'Branding', 'Logo Design', 'Mockups'],
        liveUrl: '#',
        designProcessUrl: '/mikkelborg/Mikkelborg_Kro_Designproces.pdf',
        image: '/mikkelborg/Mikkelborg_Hovedlogo_Farvet.png',
    },
    {
        id: 5,
        title: '2. semester eksamensprojekt',
        year: '2026',
        role: 'UX/UI + Frontend + Research',
        summary:
            '2. semester eksamensprojekt udviklet som en digital platform for Business DE-DK med fokus på at skabe forbindelser og muligheder på tværs af den dansk-tyske grænseregion.',
        tools: ['Figma', 'Vue', 'JavaScript', 'Research', 'UX/UI', 'Firebase'],
        liveUrl: 'https://businessregion-c9c60.web.app/',
        reportUrl: '/business-region/2-semester-eksamensrapport.pdf',
        image: '/business-region/business-region-hero.svg',
    },
    {
        id: 1,
        title: "SEA's Bedste Kortfilm 2026",
        year: '2026',
        role: '',
        summary: '',
        tools: [],
        liveUrl: '#',
        image: null,
    },
    {
        id: 2,
        title: 'Brødrene Løvehjerte (Eksamensprojekt)',
        year: '2025',
        role: 'Design + Frontend + UX/UI + Video Production',
        summary:
            'Første semester eksamensprojekt for Multimediedesigner uddannelsen, her fik vi opgaven at vi skulle promovere teaterstykket Brødrene løvehjerte af Esbjergs Amatør teater Skarntyden',
        tools: ['Figma', 'HTML', 'CSS', 'Research', 'InDesign', 'Photoshop', 'Illustrator'],
        liveUrl: '#',
        repoUrl: 'https://github.com/Mogensan/broedrende-loevehjerte',
        reportUrl: '/1stSemesterExamRapport.pdf',
        videoUrl: 'https://www.youtube.com/shorts/ay6_dKBfIhs',
        image: card2ScreenImage,
    },
    {
        id: 3,
        title: 'Portfolio Projekt',
        year: '2026',
        role: 'UX/UI + Frontend + Content Creation',
        summary:
            'Personlig portfolio bygget i Vue med fokus på tydelig identitet, informativt, performance og responsivt layout.',
        tools: ['Vue 3', 'TailwindCSS', 'Vite', 'JavaScript', 'InDesign', 'Illustrator', 'Photoshop'],
        liveUrl: '#',
        repoUrl: '#',
        image: card3ScreenImage,
    },
    {
        id: 4,
        title: 'Mini-Me Projekt',
        year: '2025',
        role: 'Content Creation',
        summary:
            'Mini-Me projekt hvor jeg har skabt en digital mini-version af mig selv ved inspireret af The Simpsons hjælp af Illustrator og Photoshop, som kan bruges i forskellige digitale sammenhænge.',
        tools: ['Illustrator', 'Photoshop',],
        liveUrl: '#',
        repoUrl: '#',
        image: miniMeClassImage,
    },
]
