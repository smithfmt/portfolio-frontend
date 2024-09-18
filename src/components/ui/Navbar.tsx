import { scrollToElement } from "@utils/utils";

const NavBar = () => {
    const navs = [{text: "Intro", section:"hero-section"},{text: "About", section:"about-section"}, {text: "Experience", section:"experience-section"},{text: "Skills", section:"skills-section"}, {text: "Testimonials", section:"testimonials-section"}, {text: "Contact", section:"footer"}];
    return (
        <div className="flex p-4 px-48 pb-4 gap-16 justify-end bg-fade-bottom-black fixed top-0 z-50 w-full text-neutral-50">
            {navs.map((nav,i) => {
                return (
                    <a key={"nav-"+i} className="watch-scroll fade-in underline-expand text-lg text-glow-white font-extrabold cursor-pointer" onClick={() => scrollToElement(nav.section)}>
                        {nav.text}
                    </a>
                )
            })}
        </div>
    );
}

export default NavBar;
