import videoCvScreenImage from '@/assets/imgs/videocvscreen.jpg'
import card2ScreenImage from '@/assets/imgs/BLHheaderimg.jpg'
import card3ScreenImage from '@/assets/imgs/portfoliopage.jpg'
import card5ScreenImage from '@/assets/imgs/NationalFlowerDay.jpg'
import card5FullScreenImage from '@/assets/imgs/NationalFlowerDay_full.jpg'
import miniMeClassImage from '@/assets/imgs/miniMeClasspic.jpg'

export const projects = [
    {
        id: 1,
        title: 'Video CV',
        year: '2026',
        role: 'Video Production',
        summary:
            'Video CV produceret i Premiere Pro og After Effects, hvor jeg præsenterer mine kompetencer og erfaringer på en kreativ og visuel måde.',
        tools: ['Premiere Pro', 'Adobe After Effects', 'Scriptwriting'],
        liveUrl: 'https://www.youtube.com/watch?v=E9ImpDZFHYE',
        scriptUrl: '/Video_CV_script.pdf',
        image: videoCvScreenImage,
    },
    {
        id: 2,
        title: 'Brødrene Løvehjerte (Eksamensprojekt)',
        year: '2025',
        role: 'Illustrator + Photoshop',
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
    {
        id: 5,
        title: 'Infographics Plakat',
        year: '2026',
        role: 'Content Creation',
        summary:
            'Infographics plakat, om National Flower Day. Her jeg har designet en informativ og visuelt tiltalende plakat, der præsenterer komplekse data på en letforståelig måde ved hjælp af InDesign og Illustrator.',
        tools: ['InDesign', 'Illustrator', 'Research'],
        liveUrl: '#',
        repoUrl: '#',
        image: card5ScreenImage,
        galleryImage: card5FullScreenImage,
    },
]
