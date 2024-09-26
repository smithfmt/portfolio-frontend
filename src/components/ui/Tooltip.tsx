const Tooltip = ({ text, closed, contact }: { text: string, closed: boolean, contact?:boolean }) => {

    return (
        <div className={`fixed ${contact?"bottom-32":"bottom-16"} right-5 p-2 px-4 text-sm ${closed ? "opacity-0 pointer-events-none" : "opacity-100"} button-glow-white`}>
            {text}
        </div>
    );
};

export default Tooltip;
