import { scrollToElement } from "@utils/utils";
import { useState } from "react";
import Toggle from "./Toggle";
import React from "react";
import HomeIcon from "@components/icons/HomeIcon";

const NavBar = ({page}:{page:string}) => {
    const homepageNavs = [
        {text: "Intro", section:"hero-section"},
        {text: "About", section:"about-section"}, 
        {text: "Experience", section:"experience-section"},
        {text: "Skills", section:"skills-section"}, 
        // {text: "Testimonials", section:"testimonials-section"}, 
        // {text: "Contact", section:"contact-section"},
    ];

    const [open, setOpen] = useState(false);
    
    const isHomepage = page==="/";

    return (
        <>
        <nav className={`fixed top-0 left-0 w-full z-[100] max-w-[100vw] flex justify-end bg-fade-bottom-black text-neutral-50 p-8 pb-16 md:p-4 md:pb-4 md:px-16 lg:px-32 xl:px-48 2xl:px-64
                flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 max-h-0 ${open?"max-h-full translate-y-[0%]":""} transition-all duration-500 max-h-full -translate-y-[100%] md:-translate-y-0 md:max-h-fit
            `}>
            {isHomepage && homepageNavs.map((nav,i) => {
                return (
                    <a key={"nav-"+i} className="underline-expand text-lg text-glow-white font-extrabold cursor-pointer" onClick={() => (scrollToElement(nav.section),open&&setOpen(false))}>
                        {nav.text}
                    </a>
                )
            })}
            {!isHomepage && <a className="underline-expand text-lg text-glow-white font-extrabold cursor-pointer" href="/">
                Return Home
            </a>}
        </nav>
        {isHomepage ?
            <button onClick={() => setOpen(!open)} className={`fixed top-2 right-2 z-[100] md:hidden ${open?"":""} text-neutral-50 text-lg`}>
                <Toggle open={open} />
            </button>
        : <a href="/"><button className={`fixed top-2 right-2 z-[100] md:hidden text-neutral-50 text-lg w-10`}>
            <HomeIcon />
        </button></a>}
        </>
    );
}

export default NavBar;
