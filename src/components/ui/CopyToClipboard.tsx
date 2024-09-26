import { useState, useRef, useEffect } from "react";
import Tooltip from "./Tooltip";
import MailIcon from "@components/icons/MailIcon";

const CopyToClipboard = ({ text, contact }: { text: string, contact?:boolean }) => {
    const [closed, setClosed] = useState(true);
    const timeoutRef = useRef<any>(null);

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
        <button onClick={handleClick} className="relative flex items-center gap-2 max-h-8 text-8">
            <div className="max-h-6 md:max-h-8 aspect-square"><MailIcon /></div>
            <p className="underline-slide">{text||"freddie@freddiesmith.dev"}</p>
            <Tooltip text="Copied to Clipboard!" closed={closed} contact={contact} />
        </button>
    );
};

export default CopyToClipboard;
