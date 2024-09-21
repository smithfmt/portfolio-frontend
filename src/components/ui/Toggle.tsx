const Toggle = ({ open }:{ open:boolean }) => {
    return (
        <div className={`flex flex-col gap-2 w-8
        [&>span]:bg-neutral-50 [&>span]:w-full [&>span]:h-1 [&>span]:rounded-lg [&>span]:transition-all`}>
            <span className={`${open?"rotate-45 translate-y-3":""}`} />
            <span className={`${open?"max-w-0":""}`} />
            <span className={`${open?"-rotate-45 -translate-y-3":""}`} />
        </div>
    );
};

export default Toggle;