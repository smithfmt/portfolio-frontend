import { useState, useRef, useEffect, type ReactNode } from "react";
import Tooltip from "./Tooltip";

const CopyToClipboard = ({ children, text }: { children: ReactNode, text: string }) => {
    const [closed, setClosed] = useState(true);
    const timeoutRef = useRef<number | null>(null);

    const handleClick = () => {
        navigator.clipboard.writeText(text);
        setClosed(false);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setClosed(true);
        }, 500);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <button onClick={handleClick} className="flex items-center gap-2 max-h-8 text-8">
            {children}
            <Tooltip text="Copied to Clipboard!" closed={closed} />
        </button>
    );
};

export default CopyToClipboard;
