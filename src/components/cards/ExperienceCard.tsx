import { Icons } from "@assets/images/Images";
import type { Experience } from "@data/types";
import { useState } from "react";

const ExperienceCard = ({ experience }: {experience: Experience}) => {
    const [expand, setExpand] = useState(false);
    const {title, company, date, techList, points, links} = experience;
    return (
        <div className="grid gap-2 watch-scroll fade-in">
            <h2 className="text-3xl"><strong>{title}</strong> | { company ? company + ", " : "" }{date}</h2>
            <div className="flex gap-4 text-lg text-glow-blue">{techList.map((tech,i) => <><p>{tech}</p>{i<techList.length-1&&<p>•</p>}</>)}</div>
            <button className="underline-expand w-fit py-2 px-4 text-glow-white hover:text-glow-white active:text-glow-white transition-all text-3xl font-black" onClick={() => setExpand(!expand)}>{expand?"-":"+"}</button>
            <div className="overflow-hidden">
                <ul className={`grid list-disc ml-4 gap-1 overflow-hidden ${expand ? "max-h-[100rem] [transition:max-height_1s_ease-out]" : "max-h-0 [transition:max-height_0.5s_cubic-bezier(0,1,0,1)]"}`}>
                    {points.map(point => <li className="list-inside">{point}</li>)}
                </ul>
            </div>
            {links && <div className="flex gap-4 py-4">{links.map(link => <a href={link.url} target="_blank"><img className="max-h-16 bg-radial-glow filter grayscale brightness-150 contrast-50 hover:filter-none transition-all" src={Icons[link.icon]?.src||""} alt={link.icon}/></a>)}</div>}
        </div>
    );
};

export default ExperienceCard;