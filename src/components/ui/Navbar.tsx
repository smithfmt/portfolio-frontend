import { scrollToElement } from "@utils/utils";
import { useState } from "react";
import Toggle from "./Toggle";

const NavBar = () => {
    const navs = [{text: "Intro", section:"hero-section"},{text: "About", section:"about-section"}, {text: "Experience", section:"experience-section"},{text: "Skills", section:"skills-section"}, {text: "Testimonials", section:"testimonials-section"}, {text: "Contact", section:"footer"}];
    
    const [open, setOpen] = useState(false);

    return (
        <div className={`fixed top-0 left-0 w-full flex justify-end z-50 max-w-[100vw]`}>
            <nav className={`relative flex justify-between w-full bg-fade-bottom-black text-neutral-50 p-8 pb-16 md:p-4 md:pb-4 md:px-16 lg:px-48
                    flex-col md:flex-row gap-4 md:gap-0 max-h-0 ${open?"max-h-full translate-y-[0%]":"pointer-events-none"} transition-all duration-500 max-h-full -translate-y-[100%] md:-translate-y-0 md:max-h-fit
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
                <Toggle open={open} />
            </button>
        </div>
        
    );
}

export default NavBar;
