type LinkIconList = "GitHub" | "Figma" | "Website";

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
};