import Orbs from "../graphics/orbs/Orbs"

const Background = () => {
    return (
        <div className="fixed bg-neutral-800 h-full w-full z-0 max-w-[100svw] pointer-events-none">
            <Orbs />
        </div>
    )
}

export default Background;