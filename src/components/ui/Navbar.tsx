import { scrollToElement } from "@utils/utils";
import { useState } from "react";

const NavBar = () => {
    const navs = [{text: "Intro", section:"hero-section"},{text: "About", section:"about-section"}, {text: "Experience", section:"experience-section"},{text: "Skills", section:"skills-section"}, {text: "Testimonials", section:"testimonials-section"}, {text: "Contact", section:"footer"}];
    
    const [open, setOpen] = useState(false);

    return (
        <>
        <nav className={`box-border fixed top-0 left-0 z-50 flex justify-end w-full bg-fade-bottom-black text-neutral-50 
                flex-col gap-4 p-8 pb-16 max-h-0 ${open?"max-h-full translate-y-[0%]":""} transition-all duration-500 -translate-y-[100%]
                md:flex-row md:gap-16 md:p-4 md:pb-4 md:px-48 md:-translate-y-0 md:max-h-fit
            `}>
            {navs.map((nav,i) => {
                return (
                    <a key={"nav-"+i} className="underline-expand text-lg text-glow-white font-extrabold cursor-pointer" onClick={() => (scrollToElement(nav.section),setOpen(false))}>
                        {nav.text}
                    </a>
                )
            })}
        </nav>
        <button onClick={() => setOpen(!open)} className={`fixed top-2 right-2 z-50 md:hidden ${open?"":""} text-neutral-50 text-lg`}>
            TOG
        </button>
        </>
        
    );
}

export default NavBar;
