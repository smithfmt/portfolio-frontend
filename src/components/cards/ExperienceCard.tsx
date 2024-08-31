import { Icons } from "@assets/images/Images";
import type { Experience } from "@data/types";
import { useEffect, useState } from "react";

const ExperienceCard = ({ experience }: {experience: Experience}) => {
    const [expand, setExpand] = useState(true);
    const {title, company, date, techList, points, links} = experience;
    return (
        <div className="grid gap-2 watch-scroll fade-in mt-8 opacity-0">
            <h2 className="text-3xl"><strong>{title}</strong> | { company ? company + ", " : "" }{date}</h2>
            <div className="flex gap-4 text-lg text-glow-blue font-extrabold">{techList.map((tech,i) => <><p>{tech}</p>{i<techList.length-1&&<p>•</p>}</>)}</div>
            <div className="overflow-hidden">
                <ul className={`grid list-disc ml-4 my-4 gap-1 overflow-hidden ${expand ? "max-h-[100rem] [transition:max-height_1.5s_ease-in-out]" : "max-h-0 [transition:max-height_0.5s_cubic-bezier(0,1,0,1)]"}`}>
                    {points.map((point,i) => <li key={i+"point"} className="list-inside">{point}</li>)}
                </ul>
            </div>
            {links && <div className="flex gap-4 py-4">{links.map(link => <a href={link.url} target="_blank" className="flex gap-2 items-center group">
                <img className="max-h-12 filter grayscale brightness-200 contrast-50 hover:grayscale-0 hover:contrast-100 hover:brightness-100 active:grayscale-0 active:brightness-90 active:contrast-100 transition-all" src={Icons[link.icon]?.src||""} alt={link.icon}/>
                <p className="underline-slide">{link.text ? link.text+" ❯" :""}</p>
            </a>)}</div>}
            <div className={`relative w-full flex justify-center watch-scroll underline-expand-view after:-top-8 after:ease-in-out text-xl mt-8 [&.viewed>button]:rotate-180`}><button onClick={() => setExpand(!expand)} className={`w-10 h-4 rounded-md flex items-center justify-center transition-transform duration-1000 cursor-pointer`}>{"🞃"}</button></div>
        </div>
    );
};

export default ExperienceCard;