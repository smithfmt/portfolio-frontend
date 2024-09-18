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