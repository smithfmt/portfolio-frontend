import { Images } from "@assets/images/Images";
import { useState } from "react";

const ImageSlider = ({ images }: { images: string[] }) => {
    const [selected, setSelected] = useState(0);

    const changeSlide = (newKey:number) => {
        if (newKey>images.length-1) newKey -= images.length;
        if (newKey<0) newKey += images.length-1;
        setSelected(newKey);
    };

    const positionSlides = (i:number, selected:number, images:string[]) => {
        const prev = selected-1 >= 0 ? selected-1 : images.length-1;
        const next = selected+1 <= images.length-1 ? selected+1 : 0;
    
        const prev2 = selected-2 >= 0 ? selected-2 : images.length+selected-2;
        const next2 = selected+2 <= images.length-1 ? selected+2 : 0+selected+2-images.length;
        switch (i) {
            case selected:
                return "-translate-y-16"
            case prev:
                return "-translate-x-full h-[calc(100%-8rem)]";
            case prev2:
                return "-translate-x-[200%] h-[calc(100%-8rem)]";
            case next:
                return "translate-x-full h-[calc(100%-8rem)]";
            case next2:
                return "translate-x-[200%] h-[calc(100%-8rem)]";
            default:
                return "hidden";
        }
    };

    return (
        <div className="relative z-50 w-full h-full pt-12 md:pt-32 md:pb-8 border-line-b">
            <div className="relative w-full h-64 xs:h-[20rem] sm:h-[24rem] md:h-[30rem] mb-4 md:mb-24 flex justify-center">  
                {images.map((image,i) => {
                    const slideStyle = positionSlides(i,selected,images)
                        
                    return (
                        <div key={`slide-${i}`} onClick={() => i!==selected?setSelected(i):""} className={`w-fit h-full absolute transition-all duration-300 px-8 sm:px-16 md:px-24 ${slideStyle}`}>
                            <img className={`relative h-full object-contain z-40 ${selected===i?"cursor-default":"cursor-pointer"}`} src={Images[image]?.src} alt={image} />
                            <img className={`absolute top-0 left-0 blur-sm px-24 z-20 h-full object-contain ${selected===i?"cursor-default":"cursor-pointer"}`} src={Images[image]?.src} alt={image} />
                        </div>
                    );
                })}
            </div>
            <div className="absolute bottom-0 md:bottom-8 w-full p-8 flex justify-center text-3xl md:text-3xl">
                <div className="flex items-center gap-4 md:gap-8 w-fit px-4 md:px-16 py-2 md:py-4 rounded-full bg-neutral-900 bg-opacity-90 shadow-glow-white border border-neutral-50">
                    <button className="mb-1" onClick={() => changeSlide(selected-1)}>←</button>
                    {images.map((image,i) => {
                        return (
                            <span key={`point-${i}`} onClick={() => setSelected(i)} className={`pointer-events-none md:pointer-events-auto bg-neutral-50 w-1 md:w-2 h-1 md:h-2 rounded-full transition-all cursor-pointer ${i===selected?"outline outline-2 outline-neutral-50 shadow-glow-white":""}`}/>
                        );
                    })}
                    <button className="mb-1" onClick={() => changeSlide(selected+1)}>→</button>
                </div>
            </div>
        </div>
                
    );
};

export default ImageSlider;