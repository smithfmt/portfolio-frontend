import TriangleIcon from "@components/icons/TriangleIcon";
import IconLink from "@components/ui/IconLink";
import type { Experience } from "@data/types";
import React, { useEffect, useRef, useState } from "react";

const ExperienceCard = ({ experience }: {experience: Experience}) => {
    const { id, title, company, date, techList, points, links, projectURL } = experience;
    const [expanded, setExpanded] = useState(false);
    const [maxHeight, setMaxHeight] = useState(0);
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (listRef.current) {
          setMaxHeight(listRef.current.scrollHeight);
        }
        if (typeof window !== "undefined" && window.innerWidth > 768) setExpanded(true);
    }, [points]);

    return (
        <div id={"experience-"+id} className="flex flex-col gap-2 watch-scroll fade-in mt-8 opacity-0">
            <a href={projectURL||""} className={`${projectURL?"cursor-pointer":"cursor-default"}`}>
                <h2 className="text-lg md:text-3xl"><strong>{title}</strong> | { company ? company + ", " : "" }{date}</h2>
            </a>
            <div className="flex flex-wrap gap-2 md:gap-4 text-md md:text-lg text-glow-blue font-extrabold">{techList.map((tech,i) => <React.Fragment key={"frag-"+i}><p>{tech}</p>{i<techList.length-1&&<p>•</p>}</React.Fragment>)}</div>
            <div className="my-4">
                <ul className={`grid list-disc md:ml-4 gap-1 text-sm md:text-lg`}>
                    <li className="list-inside my-1">{points[0]}</li>
                </ul>
                <ul ref={listRef} style={{ maxHeight: expanded ? maxHeight : 0 }} className={`grid list-disc md:ml-4 gap-1 text-sm md:text-lg [transition:max-height_300ms_ease-out] overflow-hidden`}>
                    {points.slice(1).map((point,i) => <li key={i+"point"} className="list-inside my-1">{point}</li>)}
                </ul>
                <button className={`${points.length===1?"hidden":""} md:hidden md:pointer-events-none font-bold mt-2 z-50`} onClick={() => setExpanded(!expanded)}>{`Read ${expanded?"less -": "more +"}`}</button>
            </div>
            {links && <div className="flex flex-wrap gap-4 py-4">{links.map((link, i) => <a key={i+"link"} href={link.url} target="_blank" className="flex gap-2 items-center group">
                <IconLink icon={link.icon} />
                <p className="underline-slide text-sm md:text-lg">{link.text ? link.text+" ❯" :""}</p>
            </a>)}</div>}
            {projectURL &&
                <a href={projectURL} className="w-fit underline-slide text-sm md:text-lg">
                    <p>See Project Details ❯</p>
                </a>
            }
            <div className={`relative w-full flex justify-center watch-scroll underline-expand-view after:-top-8 after:ease-in-out text-xl mt-8 [&.viewed>.triangle]:rotate-180`}><div className={`triangle w-4 h-2 rounded-md flex items-center justify-center transition-transform duration-1000`}><TriangleIcon /></div></div>
        </div>
    );
};

export default ExperienceCard;