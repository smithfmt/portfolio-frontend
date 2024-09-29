import { Images } from "@assets/images/Images";
import { useEffect, useState } from "react";

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const ImageSlider = ({ images }: { images: string[] }) => {
    const [selected, setSelected] = useState(0);

    const changeImage = (i:number) => {
        console.log("changing")
        let newKey = selected + i;
        if (newKey>images.length-1) newKey -= images.length;
        if (newKey<0) newKey += images.length-1;
        setSelected(newKey);
    };
    let swiper;
    useEffect(() => {
        if (typeof window !== undefined) {
            swiper = new Swiper('.swiper', {
                // direction: 'vertical',
                loop: true,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // And if we need scrollbar
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            });
        }
    },[])
    
    const prev = selected-1 >= 0 ? selected-1 : images.length-1;
    const next = selected+1 <= images.length-1 ? selected+1 : 0;

    return (
        <div className="relative z-50 w-full h-full">
            <div className="swiper w-full h-[50rem]">
                <div className="swiper-wrapper">
                    {images.map((image) => {
                        return (
                            <div className="swiper-slide">
                                <img src={Images[image]?.src} alt={image} />
                            </div>
                        );
                    })}
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-scrollbar"></div>
            </div>
            
        </div>
                
    );
};

export default ImageSlider;