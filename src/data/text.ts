import type { Experience } from "@data/types";

export const hero = {
    title: "Hi, I'm Freddie Smith.",
    subtitle: "Frontend Developer",
};

export const experience : { title: string, experiences: Experience[] } = {
    title: "Experience",
    experiences: [
        {
            title: "Software Developer",
            company: "Sentium",
            date: "2024",
            techList: [
                "JavaScript", "Python", "CSS", "ERPNext",
            ],
            points: [
                "Worked in a team to design and develop a corporate Intranet hub.",
                "Produced a functional frontend in alignment with the client’s branding and design values, responding to continuous user feedback.",
                "Worked with Enterprise Resource Planning software ERPNext.",
                "Managed and adapted to strict deadlines alongside working for my degree.", 
            ],
        },
        {
            title: "IEUK",
            company: "Bright Network / LLoyds",
            date: "2023",
            techList: [
                "Figma",
            ],
            points: [
                "Participated as an intern in the Bright Network internship experience under the Technology stream and completed a sample work project for Lloyd’s Bank.", 
                "Designed and prototyped a business management tool that would aid SMEs in working towards the goal of Net Zero, using UI & UX design skills and Figma to create application designs & prototypes.", 
                "Attended talks from industry experts in the sector to enhance my knowledge.", 
            ],
            links: [{ icon: "Figma", url: "https://www.figma.com/file/7ddlcyX1IxrBR10lSau9IF/IEUK-23-Design-Final" }],
        },
        {
            title: "Website Development",
            company: "FSDesign",
            date: "2023 - Present",
            techList: [
                "TypeScript", "Next.js", "TailwindCSS", "Keystone.js", "GraphQL"
            ],
            points: [
                "Developing my own website using a Next.js frontend and a Keystone.js & GraphQL backend, providing invaluable experience of full-stack web development and UI & UX design.", 
            ],
            links: [{ icon: "Website", url: "https://freddiesmithdesign.vercel.app/" }],
        },
        {
            title: "Software Engineering Course",
            company: "IBM",
            date: "2023",
            techList: [
                "JavaScript", "React.js", "CSS", "Figma",
            ],
            points: [
                "Completed the IBM Front-End Developer Course, which entailed 8 modules covering the essentials for a foundational knowledge of software development.",
                "Participated in a capstone project creating a medical appointment booking app.", 
                "Designed the UI in Figma.", 
                "Wrote static HTML pages and converted them into React Components with full functionality linked to a provided backend.",
            ],
        },
        {
            title: "Work Experience",
            company: "Sentium Consulting",
            date: "2022",
            techList: [
                "Python", "Pandas", "Prefect.io",
            ],
            points: [
                "Developed a data pipeline in Python, handling and processing large data sets.",  
                "Adapted to technical challenges and responded to supervisor’s feedback.",
            ],
        },
        {
            title: "Vocabulary Learning App",
            date: "2021 - 2022",
            techList: [
                "JavaScript", "React.js", "Express.js", "PostgreSQL", "Prisma ORM",
            ],
            points: [
                "Created and developed a full-stack JavaScript web app as a vocabulary learning tool to aid study.", 
                "Wrote a Rest API in Express.js and developed skills in database management and Prisma ORM.",
                "Implemented User Auth using JWTs.",
                "Successfully trialled on users and responded to feedback and criticism.",
                "A response to the lack of usable free vocabulary tools on the market", 
            ],
            links: [{ icon: "Website", url: "https://memlet-frontend.vercel.app/dashboard" }],
        },
        {
            title: "Board Game Digital Prototype",
            date: "2021",
            techList: [
                "JavaScript", "React.js", "Express.js", "Firebase",
            ],
            points: [
                "Developing a demo web app for the board game that I designed, prototyped, real-world tested and now plan to publish.", 
                "Working with real-time databases, user auth and state management.",
            ],
        },
    ],
}