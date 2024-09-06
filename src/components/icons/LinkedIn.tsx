const LinkedIn = ({ href }: { href:string }) => {
    return (
        <a className="grid items-center justify-center rounded-lg font-black text-4xl w-12 h-12 hover:bg-[#0072b1] text-white transition-all" href={href} target="_blank">
            in
        </a>
    );
}

export default LinkedIn;