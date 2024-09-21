import TriangleIcon from "@components/icons/TriangleIcon";
import IconLink from "@components/ui/IconLink";
import type { Experience } from "@data/types";
import React from "react";

const ExperienceCard = ({ experience }: {experience: Experience}) => {
    const { id, title, company, date, techList, points, links } = experience;
    return (
        <div id={"experience-"+id} className="grid gap-2 watch-scroll fade-in mt-8 opacity-0">
            <h2 className="text-lg md:text-3xl"><strong>{title}</strong> | { company ? company + ", " : "" }{date}</h2>
            <div className="flex flex-wrap gap-2 md:gap-4 text-md md:text-lg text-glow-blue font-extrabold">{techList.map((tech,i) => <React.Fragment key={"frag-"+i}><p>{tech}</p>{i<techList.length-1&&<p>•</p>}</React.Fragment>)}</div>
            <div>
                <ul className={`grid list-disc md:ml-4 my-4 gap-1 text-sm md:text-lg`}>
                    {points.map((point,i) => <li key={i+"point"} className="list-inside">{point}</li>)}
                </ul>
            </div>
            {links && <div className="flex flex-wrap gap-4 py-4">{links.map((link, i) => <a key={i+"link"} href={link.url} target="_blank" className="flex gap-2 items-center group">
                <IconLink icon={link.icon} />
                <p className="underline-slide text-sm md:text-lg">{link.text ? link.text+" ❯" :""}</p>
            </a>)}</div>}
            <div className={`relative w-full flex justify-center watch-scroll underline-expand-view after:-top-8 after:ease-in-out text-xl mt-8 [&.viewed>.triangle]:rotate-180`}><div className={`triangle w-4 h-2 rounded-md flex items-center justify-center transition-transform duration-1000`}><TriangleIcon /></div></div>
        </div>
    );
};

export default ExperienceCard;