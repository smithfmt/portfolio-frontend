const Tooltip = ({ text, closed }: { text: string, closed: boolean }) => {

    return (
        <div className={`fixed bottom-16 right-5 p-2 px-4 text-sm ${closed ? "opacity-0 pointer-events-none" : "opacity-100"} button-glow-white`}>
            {text}
        </div>
    );
};

export default Tooltip;
