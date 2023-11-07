import React from "react";

import { createHost, createSlot } from 'create-slots';
import { useClickOutside } from "../../lib";

const DropdownTitle = createSlot('button');
const DropdownContent = createSlot('form');

type Props = {
    children: React.ReactNode;
    onClose: Function;
    active: boolean;
}

function Dropdown({ children, onClose, active }: Props) {
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

    return createHost(children, (Slots) => {
        return (
            <div ref={ref} className="static inline-block">
                {Slots.get(DropdownTitle)}

                {active && (
                    <div ref={innerRef} className="absolute children z-10 flex flex-col">
                        {Slots.get(DropdownContent)}
                    </div>
                )}
            </div>
        )
    });
};

Dropdown.Title = DropdownTitle;
Dropdown.Content = DropdownContent;

export default Dropdown;
