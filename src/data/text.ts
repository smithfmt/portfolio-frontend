import type { Experience, Project } from "@data/types";

export const info = {
    email: "freddie@freddiesmith.dev",
    linkedin: "https://www.linkedin.com/in/freddie-smith-dev1",
    siteurl: "freddiesmith-portfolio.vercel.app",
    github: "https://github.com/smithfmt",
    cv: "Freddie Smith CV 19-09-2024.pdf",
}

export const hero = {
    title: "Hi, I'm Freddie Smith.",
    subtitle: "Frontend Developer",
};

export const intro = {
    title: "About Me",
    body: `I'm a hard-working and creative first class graduate seeking a Software Developer position. 
    I am a Self-taught JavaScript developer with an emphasis on frontend design and development, using frameworks like React, Next.js, and Astro. 
    While working at Sentium, I successfully delivered the frontend for a corporate intranet hub.`,
};

export const professionalExperience : { title: string, experiences: Experience[] } = {
    title: "Experience",
    experiences: [
        {
            title: "Software Developer",
            id: "sentium",
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
            id: "ieuk",
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
            links: [{icon: "Page", text: "See Project Details", url: "/projects/ieuk"}, { icon: "Figma", text: "View Final Design", url: "https://www.figma.com/file/7ddlcyX1IxrBR10lSau9IF/IEUK-23-Design-Final" }],
        },
        {
            title: "Software Engineering Course",
            id: "ibm-course",
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
            links: [{ icon: "Figma", text: "View Capstone Design", url: "https://www.figma.com/design/aW31OkcrUMTsaq0IkEGGSs/Capstone-Project?node-id=0-1&t=mq0fbOTtgInulGQA-1" }],
        },
        {
            title: "Work Experience",
            id: "sentium-consulting",
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
    ],
};

export const personalExperience: { title: string, experiences: Experience[] } = {
    title: "Projects",
    experiences: [
        {
            title: "Portfolio Site",
            id: "this-portfolio",
            date: "2024 - Present",
            techList: [
                "Astro", "React.js", "Three.js", "GLSL", "TailwindCSS",
            ],
            points: [
                "Developed this portfolio site to present my projects.",
                "Designed Three.js graphics and wrote GLSL shaders.",
            ],
            links: [{ icon: "GitHub", text: "View GitHub Repo", url: "https://github.com/smithfmt/portfolio-frontend" }],
        },
        {
            title: "Particle Visualisation",
            id: "particle-visualisation",
            date: "2024",
            techList: [
                "Astro", "React.js", "Three.js", "GLSL", "TailwindCSS",
            ],
            points: [
                "Experimented with Three.js particle rendering in React islands on an Astro site.",
                "Wrote GLSL shaders for performance optimisation.",
            ],
            links: [{icon: "Page", text: "See Project Details", url: "/projects/particles"},{ icon: "GitHub", text: "View GitHub Repo", url: "https://github.com/smithfmt/particle-visualisation-astro-test" }],
        },
        {
            title: "Website Development",
            id: "fsdesign",
            company: "FSDesign",
            date: "2023 - Present",
            techList: [
                "TypeScript", "Next.js", "TailwindCSS", "Keystone.js", "GraphQL"
            ],
            points: [
                "Developing my own website using a Next.js frontend and a Keystone.js & GraphQL backend, providing invaluable experience of full-stack web development and UI & UX design.", 
            ],
            links: [{ icon: "Web", text: "View Site", url: "https://freddiesmithdesign.vercel.app/" }],
        },
        {
            title: "Vocabulary Learning App",
            id: "vocabulary-app",
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
            links: [{icon: "Page", text: "See Project Details", url: "/projects/memlet"}, { icon: "Web", text: "View Final App", url: "https://memlet-frontend.vercel.app/login" }, { icon: "GitHub", text: "View Frontend Repo", url: "https://github.com/smithfmt/memlet-frontend" }, { icon: "GitHub", text: "View Backend Repo", url: "https://github.com/smithfmt/memlet-backend" }],
        },
        {
            title: "Board Game Digital Prototype",
            id: "board-game-prototype",
            date: "2021",
            techList: [
                "JavaScript", "React.js", "Express.js", "Firebase",
            ],
            points: [
                "Developing a demo web app for the board game that I designed, prototyped, real-world tested and now plan to publish.", 
                "Working with real-time databases, user auth and state management.",
            ],
            links: [{icon: "Page", text: "See Project Details", url: "/projects/mythoi"}, { icon: "Figma", text: "New Card Designs", url: "https://www.figma.com/design/ZDbGMuqQhXjTgwMtzxhg6u/Mythoi%3A-Strategos-Card-Designs?node-id=0-1&t=uKgBk7iP5Uho5DDo-1" }, { icon: "GitHub", text: "View Frontend Repo", url: "https://github.com/smithfmt/battle-for-greece-frontend" },{ icon: "GitHub", text: "View Backend Repo", url: "https://github.com/smithfmt/battle-for-greece-backend" }],
        },
    ],
};

const jsframeworks = {
    "React.js": {
        "This Portfolio#1": "This Portfolio is built in Astro and uses React islands to render dynamic components.",
        "Board Game Prototype#1": "I developed the frontend for my prototype in React.",
        "Vocabulary App#1": "I developed the frontend for my vocabulary app in React.",
    },
    "Next.js": {
        "FSDesign#1": "I developed  the frontend for my site in Next.",
        "React Course#1": "Completed an Advanced React Course developing a eCommerce platform in Next.#nolink",
    },
    "Astro": {
        "This Portfolio#2": "This portfolio is built in Astro, using React islands to render dynamic components.",
        "Particle Visualisation#1": "My experiments in particle visualisation used an Astro site as a base.",
    },
    "Express.js": {
        "Board Game Prototype#2": "I developed the backend for my prototype in Express, controlling User Auth and data management.",
        "Vocabulary App#2": "I developed the backend for my vocabulary app in Express, controlling User Auth and data management.",
    },
    "Keystone.js": {
        "FSDesign#2": "I developed the backend for my site in Keystone.",
        "React Course#2": "Used a Keystone CMS backend for an eCommerce platform.#nolink",
    },
    "Three.js": {
        "This Portfolio#3": "This portfolio's backdrop and this graphic were made using React Three Fiber and GLSL Shaders.",
        "Particle Visualisation#2": "I have experimented using Three.js and GLSL Shaders for particle visualisation.",
    },
    "Sentium#1": "Developed a JavaScript frontend for a corporate intranet hub.",
    "IBM Course#1": "Proficiency in JavaScript was required to complete the course.",
}
const tsframeworks = {
    "React.js#ts": {
        "This Portfolio#ts1": "This Portfolio is built in Astro and uses React islands to render dynamic components.",
        "Board Game Prototype#ts1": "I developed the frontend for my prototype in React.",
        "Vocabulary App#ts1": "I developed the frontend for my vocabulary app in React.",
    },
    "Next.js#ts": {
        "FSDesign#ts1": "I developed  the frontend for my site in Next.",
        "React Course#ts1": "Completed an Advanced React Course developing a eCommerce platform in Next.#nolink",
    },
    "Astro#ts": {
        "This Portfolio#ts2": "This portfolio is built in Astro, using React islands to render dynamic components.",
        "Particle Visualisation#ts1": "My experiments in particle visualisation used an Astro site as a base.",
    },
    "Express.js#ts": {
        "Board Game Prototype#ts2": "I developed the backend for my prototype in Express, controlling User Auth and data management.",
        "Vocabulary App#ts2": "I developed the backend for my vocabulary app in Express, controlling User Auth and data management.",
    },
    "Keystone.js#ts": {
        "FSDesign#ts2": "I developed the backend for my site in Keystone.",
        "React Course#ts2": "Used a Keystone CMS backend for an eCommerce platform.#nolink",
    },
    "Three.js#ts": {
        "This Portfolio#ts3": "This portfolio's backdrop and this graphic were made using React Three Fiber and GLSL Shaders.",
        "Particle Visualisation#ts2": "I have experimented using Three.js and GLSL Shaders for particle visualisation.",
    },
}

export const wordcloud = {
    "Skills": {
        "Languages": {
            "JavaScript": jsframeworks,
            "TypeScript": tsframeworks,
            "Python": {
                "NumPy": {
                    "Sentium Consulting": "I used NumPy during my Work Experience at Sentium to create a data pipeline.",
                },
                "Pandas": {
                    "Sentium Consulting#2": "I used Pandas during my Work Experience at Sentium to create a data pipeline.",
                },
                "Prefect": {
                    "Sentium Consulting#3": "I used Prefect during my Work Experience at Sentium to manage the workflow of a data pipeline.",
                },
                "Sentium": "Used Python to write data calls in the frontend of a corporate intranet hub.",
            },
            "CSS": {
                "TailwindCSS": {
                    "This Portfolio#4": "This portfolio is developed using Tailwind.",
                },
                "Styled Components": {
                    "FSDesign#3": "Used Styled Components to develop my website.",
                    "React Course#3": "Used Styled Components in an Advanced React Course.#nolink",
                },
            },
            "GLSL": {
                "This Portfolio#5": "This portfolio's backdrop and this graphic were made using React Three Fiber and GLSL Shaders.",
                "Particle Visualisation#3": "I have experimented using Three.js and GLSL Shaders for particle visualisation.",
            },
            "GraphQL": {
                "React Course#4": "Used Apollo Client to send GraphQL calls to Keystone CMS.#nolink",
                "FSDesign#4": "Used Apollo Client to send GraphQL calls to Keystone CMS.",
            },
        },
        "Tooling": {
            "Figma": {
                "IEUK": "My final design for a business management system was made in Figma.",
                "Web Development": "I use Figma to design all of my projects before development.#nolink",
            },
            "Git": {
                "GitHub": "I use GitHub for all of my projects.#nolink",
                "Bitbucket / Jira": {
                    "Sentium Consulting#4": "I used Bitbucket and Jira.",
                },
                "GitLab": {
                    "Sentium#2": "I used GitLab at Sentium.",
                },
            },
        },
        "Databases": {
            "PostgreSQL": {
                "Vocabulary App#3": "Used a PostgreSQL database.",
                "FSDesign#5": "Used a PostgreSQL database.",
            },
            "PrismaORM": {
                "Vocabulary App#4": "Used Prisma to communicate with PostgreSQL database."
            },
            "Firebase": {
                "Board Game Prototype#3": "Used Google Firebase for Realtime functionality.",
            },
            "MongoDB": {
                "React Course#5": "Used a MongoDB database.#nolink",
            },
        },
    },
};

export const projects:{
    "memlet": Project,
    "mythoi": Project,
    "ieuk": Project,
    "particles": Project,
} = {
    "memlet": {
        title: "Memlet",
        subtitle: "A Vocabulary Learning Platform",
        techList: [
            "JavaScript", "React.js", "Express.js", "PostgreSQL", "Prisma ORM",
        ],
        links: [{ icon: "Web", text: "View Final App", url: "https://memlet-frontend.vercel.app/login" }, { icon: "GitHub", text: "View Frontend Repo", url: "https://github.com/smithfmt/memlet-frontend" }, { icon: "GitHub", text: "View Backend Repo", url: "https://github.com/smithfmt/memlet-backend" }],
        description: `I developed a vocabulary learning app as a personal project to address the lack of free, usable tools for language learners. 
        Using React.js for the frontend and Express.js with a PostgreSQL database on the backend, I built a full-stack application that helps users study and track their vocabulary progress. 
        I handled user authentication with JWTs and managed data using Prisma ORM. 
        After trialing the app with real users, I incorporated feedback to improve the user experience.`,
        images: [
            "mem1", "mem2", "mem3", "mem4", "mem5", "mem6", "mem7", "mem8", "mem9",
        ],
    },
    "mythoi": {
        title: "Mythoi: Strategos",
        subtitle: "A prototype for my board game.",
        techList: [
            "JavaScript", "React.js", "Express.js", "Firebase",
        ],
        links: [{ icon: "GitHub", text: "View Frontend Repo", url: "https://github.com/smithfmt/battle-for-greece-frontend" },{ icon: "GitHub", text: "View Backend Repo", url: "https://github.com/smithfmt/battle-for-greece-backend" }],
        description: `In 2021, I developed a digital prototype for a board game I designed and tested in the real world. 
        The web app demo was built with React.js and Express.js, utilizing Firebase for real-time database management and user authentication. 
        This project helped refine the game's mechanics while exploring real-time functionality and state management in a digital environment.`,
        images: [
            "bg1", "bg2", "bg3", "bg4", "bg5", "bg6", "bg7",
        ],
    },
    "ieuk": {
        title: "IEUK 2023",
        subtitle: "Business Management Tool Design.",
        techList: [
            "Figma",
        ],
        links: [{ icon: "Figma", text: "View Final Design", url: "https://www.figma.com/file/7ddlcyX1IxrBR10lSau9IF/IEUK-23-Design-Final" }],
        description: `During an internship experience with Bright Network, I worked on a project for Lloyd’s Bank in 2023, 
        focusing on designing a business management tool for SMEs aiming to achieve Net Zero. 
        Using Figma, I developed prototypes and refined my UI/UX design skills to create intuitive and functional designs. 
        I also gained valuable insights from industry experts through talks and workshops during the program.`,
        images: [
            "IEUK1", "IEUK2", "IEUK3", "IEUK4", "IEUK5", "IEUK6"
        ],
    },
    "particles": {
        title: "Particles",
        subtitle: "Three.js, React-three-fiber and GLSL Shaders.",
        techList: [
            "Astro", "React.js", "Three.js", "GLSL", "TailwindCSS",
        ],
        links: [{ icon: "GitHub", text: "View GitHub Repo", url: "https://github.com/smithfmt/particle-visualisation-astro-test" }],
        description: `I experimented with particle rendering using Three.js in React islands on an Astro site. 
        I developed custom GLSL shaders to optimize the performance of the visualizations and integrated them seamlessly into the project, enhancing both functionality and aesthetics.`,
    },
}