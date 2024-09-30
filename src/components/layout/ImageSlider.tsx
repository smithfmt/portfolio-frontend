import { Images } from "@assets/images/Images";
import { useEffect, useState } from "react";

const ImageSlider = ({ images }: { images: string[] }) => {
    const [selected, setSelected] = useState(0);

    const changeSlide = (i:number) => {
        console.log("changing")
        let newKey = selected + i;
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
                return "-translate-y-16 h-[calc(100%+8rem)]"
            case prev:
                return "-translate-x-full";
            case prev2:
                return "-translate-x-[200%]";
            case next:
                return "translate-x-full";
            case next2:
                return "translate-x-[200%]";
            default:
                return "hidden"
        }
    };



    return (
        <div className="relative z-50 w-full h-full pt-32 pb-8 border-line-b">
            <div className="relative w-full h-[30rem] mb-24 flex justify-center">
                
                {images.map((image,i) => {
                    const slideStyle = positionSlides(i,selected,images)
                        
                    return (
                        <div onClick={() => i!==selected?setSelected(i):""} className={`w-fit h-full absolute transition-all duration-300 px-24 ${slideStyle}`}>
                            <img className={`relative h-full object-contain z-40 ${selected===i?"cursor-default":"cursor-pointer"}`} src={Images[image]?.src} alt={image} />
                            <img className={`absolute top-0 left-0 blur-sm px-24 z-20 h-full object-contain ${selected===i?"cursor-default":"cursor-pointer"}`} src={Images[image]?.src} alt={image} />
                            {/* <div className={`pointer-events-none relative flex justify-center w-full h-full transition-all ${selected===i?"opacity-100":"opacity-50"}`}>
                                <img className={`absolute top-0 w-full z-20 rotate-180 image-fade-t`} src={Images[image]?.src} alt={image} />
                            </div> */}
                        </div>
                    );
                })}
            </div>
            <div className="absolute bottom-8 w-full p-8 flex justify-center text-3xl">
                <div className="flex items-center gap-8 w-fit px-16 py-4 rounded-full bg-neutral-900 bg-opacity-90 shadow-glow-white border border-neutral-50">
                    <button className="mb-1" onClick={() => changeSlide(-1)}>←</button>
                    {images.map((image,i) => {
                        return (
                            <span onClick={() => setSelected(i)} className={`bg-neutral-50 w-2 h-2 rounded-full transition-all cursor-pointer ${i===selected?"outline outline-2 outline-neutral-50 shadow-glow-white":""}`}/>
                        );
                    })}
                    <button className="mb-1" onClick={() => changeSlide(1)}>→</button>
                </div>
            </div>
        </div>
                
    );
};

export default ImageSlider;