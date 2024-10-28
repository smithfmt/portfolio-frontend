import LogoImage from "@assets/favicon/favicon-trans.png";

const Logo = () => {
    return (
        <a href="/" className={`h-16 md:h-full relative md:absolute top-0 -left-3 md:left-0 group md:pl-16 lg:pl-32 xl:pl-48 2xl:pl-64`}>
            <div className="relative h-full">
                <img className="relative z-20 h-full" src={LogoImage.src} alt="Logo" />
                <img className="absolute top-0 left-0 opacity-0 transition-all group-hover:opacity-50 h-full blur-sm z-10" src={LogoImage.src} alt="Logo" />
            </div>
        </a>
    );
};

export default Logo;