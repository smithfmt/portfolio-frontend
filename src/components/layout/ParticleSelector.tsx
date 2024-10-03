import ParticleShapes from "@components/graphics/particle-shapes/ParticleMotion";
import ParticleMotion from "@components/graphics/particle-motion/ParticleMotion";
import Implosion from "@components/graphics/particle-graphics/Implosion";
import NeuralNetwork from "@components/graphics/particle-graphics/NeuralNetwork";

import particleImages from "@assets/images/particles/particleImages";
import { useState } from "react";

const particleGraphics = [
    {name: "Neural Network", image: particleImages.NeuralNetwork, component: <NeuralNetwork />},
    {name: "Shapes", image: particleImages.Dodecahedron, component: <ParticleShapes />}, 
    {name: "Implosion", image: particleImages.Implosion, component: <Implosion />}, 
    {name: "Motion", image: particleImages.Motion, component: <ParticleMotion />}, 
]

const ParticleSelector = () => {
    const [selected, setSelected] = useState(0)
    return (
        <div className="flex flex-col items-center w-full py-8">
            <div className="relative z-30 w-[min(80rem,90vw)] h-[min(60rem,80vh)] backdrop-blur-sm after:w-full after:absolute after:h-full after:bg-neutral-950 after:bg-opacity-70 after:blur-lg after:top-0 after:left-0 after:-z-10 ">
                {particleGraphics[selected].component}
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 w-full py-8 px-4 md:px-16">
                {particleGraphics.map((graphic, i) => {
                    return (
                        <button 
                            onClick={() => setSelected(i)} key={"graphic-"+i} 
                            className={`${selected===i?"shadow-glow-white cursor-default text-glow-white":""} flex flex-col brightness-200 items-center flex-1 
                            button-glow-white hover:mb-0 bg-neutral-950 text-xs md:text-lg p-2 md:p-4 px-4 md:px-8 max-h-16 md:max-h-32 lg:max-h-48
                            w-fit max-w-32 md:max-w-48 xl:max-w-64 hover:text-glow-white basis-full`}>
                            <img className=" h-full object-contain" src={graphic.image.src} alt={graphic.name} />
                            <p className="font-bold text-nowrap">{graphic.name}</p>
                        </button>
                    );
                })}
            </div>
        </div>       
    );
};

export default ParticleSelector;