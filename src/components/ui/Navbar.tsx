const NavBar = () => {
    const scrollToElement = (section:string) => {
        console.log("scrolling", section)
        const element = document.getElementById(section);
        element?.scrollIntoView({behavior: "smooth"});
    }
    const navs = [{text: "About", section:"intro-section"}, {text: "Experience", section:"experience-section"}, {text: "Testimonials", section:"testimonials-section"}, {text: "Contact", section:"footer"}];
    return (
    <div className="flex p-4 px-32 gap-16 justify-center bg-navbar pl-[30%] sticky top-0 z-50 w-full text-neutral-50">
        {navs.map(nav => {
            return (
                <a className="underline-expand" onClick={() => scrollToElement(nav.section)}>
                    {nav.text}
                </a>
            )
        })}
    </div>
    );
}

export default NavBar;
