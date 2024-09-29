type LinkIconList = "GitHub" | "Figma" | "Web";

export type Experience = {
    title: string,
    company?: string,
    date: string,
    techList: string[],
    points: string[],
    links?: {
        icon: LinkIconList,
        text?: string,
        url: string,
    }[],
    id?: string,
};

export type Project = {
    title: string,
    subtitle?: string,
    techList: string[],
    links: { icon: string, text?:string, url: string, }[],
    description: string,
    images: string[],
};