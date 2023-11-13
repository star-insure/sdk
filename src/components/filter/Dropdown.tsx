import React from "react";

import { useClickOutside } from "../../lib";

type Props = {
    onClose: Function;
    active: boolean;
    title: React.ReactNode;
    children: React.ReactNode;
}

function Dropdown({ onClose, active, title, children }: Props) {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const innerRef = React.useRef<HTMLDivElement | null>(null);

    useClickOutside(ref, () => onClose(false));

    React.useEffect(() => {
        const current = ref?.current;
        const innerCurrent = innerRef.current;

        current?.classList.toggle('active', active)

        if (!current || !innerCurrent) return;

        const pos = current?.getBoundingClientRect();
        innerCurrent.style.setProperty('left', `${pos?.left}px`)
    }, [active, ref.current, innerRef.current]);

    return (
        <div ref={ref} className="static inline-block">
            {title}

            {active && (
                <div ref={innerRef} className="absolute children z-10 flex flex-col">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
