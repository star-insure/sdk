import React from 'react';
import cn from 'classnames';
import { FilterOption, TPageHeaderAction } from '../../types';
import { BackButton } from './Back';
import SearchBar from './SearchBar';
import Action from './Action';
import { FilterItem } from './FilterItem';
import { HiChevronLeft, HiChevronRight, HiXMark } from 'react-icons/hi2';
import { router } from '@inertiajs/core';

interface Props {
    title: string;
    search?: string;
    className?: string;
    innerClassName?: string;
    back?: boolean | string;
    actions?: TPageHeaderAction[];
    backText?: string;
    filterOptions?: FilterOption[];
}

export default function PageHeader({
    title,
    search,
    className = '',
    innerClassName = '',
    back = true,
    actions = [],
    filterOptions = [],
}: Props) {
    const [isSearchActive, setSearchActive] = React.useState<boolean>(false);
    const scrollContainerRef = React.useRef<HTMLDivElement | null>(null);

    const [overScroll, setOverScroll] = React.useState<boolean>(false);

    React.useEffect(() => {
        const current = scrollContainerRef.current;
        if (!current) return;

        const listener = function() {
            const activeDropdown = current.querySelector('.active');
            if (!activeDropdown) return;

            const childrenContainer = activeDropdown.querySelector('.children');
            if (!childrenContainer) return;

            const pos = activeDropdown.getBoundingClientRect();

            const posChild = childrenContainer.getBoundingClientRect();
            const posContainer = current.getBoundingClientRect();

            // if the dropdown content moves outside the scroll container to the left, make it disappear
            if (posChild.left <= posContainer.left - 50) {
                // @ts-ignore
                childrenContainer.style.visibility = 'hidden';
            } else if (posChild.left >= posContainer.right - 50) {
                // @ts-ignore
                childrenContainer.style.visibility = 'hidden';
            } else {
                // @ts-ignore
                childrenContainer.style.visibility = 'visible';
            }

            // @ts-ignore
            childrenContainer.style.left = `${pos.left}px`;
        }

        const mouseListener = function(e: MouseEvent) {
            const pos = current.getBoundingClientRect();
            if (e.clientX > pos.left && e.clientX < pos.right && e.clientY > pos.top && e.clientY < pos.bottom) {
                setOverScroll(true);
            } else {
                setOverScroll(false);
            }
        };

        current.addEventListener('scroll', listener);
        document.addEventListener('mousemove', mouseListener)
        
        return () => {
            current.removeEventListener('scroll', listener);
            document.removeEventListener('mousemove', mouseListener)
        }
    }, []);

    React.useEffect(() => {
        const scrollListener = function(e: WheelEvent) {
            if (overScroll) {
                e.preventDefault();
                scrollContainerRef.current?.scrollBy({ left: e.deltaY, behavior: 'auto' });
            }
        }

        document.addEventListener('wheel', scrollListener, { passive: false });

        return () => {
            document.removeEventListener('wheel', scrollListener);
        }
    }, [overScroll])

    function handleClear() {
        router.get(`${window.location.pathname}`);
    }

    const [hasScroll, setHasScroll] = React.useState<boolean>(false);

    const checkScroll = React.useCallback(() => {
        const current = scrollContainerRef.current;
        if (!current) return;

        const pos = current.getBoundingClientRect();

        setHasScroll(current.scrollWidth > (pos.width + 11));
    }, [scrollContainerRef.current]);

    React.useEffect(() => {
        checkScroll();

        window.addEventListener('resize', checkScroll)

        return () => {
            window.removeEventListener('resize', checkScroll);
        }
    }, [checkScroll]);

    function clickRight() {
        scrollContainerRef.current?.scrollBy({ left: 100, behavior: 'auto' });
        checkScroll();
    }

    function clickLeft() {
        scrollContainerRef.current?.scrollBy({ left: -100, behavior: 'auto' });
        checkScroll();
    }

    const filteredActions = React.useMemo(() => {
        return actions.filter(action => !action.hidden);
    }, [actions]);

    return (
        <section className={cn('col-span-full flex items-center gap-2 max-w-full rounded-lg bg-white p-2 shadow', className)}>
            {back && (
                <BackButton back={back} className="bg-gray-100 h-[60px] w-[60px] rounded" />
            )}
            
            <div className={cn('w-full grid grid-cols-[auto_1fr_auto] h-[60px] rounded bg-gray-100 p-3 gap-4', innerClassName)}>
                <button
                    type="button"
                    onClick={() => setSearchActive(true)}
                    className={cn('mr-auto flex items-center gap-4 transition-colors pr-6 pl-1', {
                        'hover:text-teal': !isSearchActive,
                    }
                )}>
                    {search && <SearchBar search={search} active={isSearchActive} onActive={setSearchActive} placeholder={`Search ${title}...`} />}

                    {!isSearchActive && <h1 className="text-base font-bold">{title}</h1>}
                </button>

                <div className="flex items-center ml-auto gap-2 h-full min-w-0 max-w-full">
                    {filterOptions.length > 0 && (
                        <>
                            <button onClick={handleClear} className="p-1.5 hover:text-red-500"><HiXMark className="w-5 h-5 stroke-[1.25]" /></button>
                            
                            {hasScroll && <HiChevronLeft onClick={clickLeft} className="w-5 h-5 text-gray-400 stroke-[1.25]" />}
                            <div ref={scrollContainerRef} className="flex items-center h-full w-full gap-3 overflow-x-scroll hide-scroll">
                                {filterOptions.map(filter => (
                                    <FilterItem key={filter.name} filter={filter} />
                                ))}
                            </div>
                            {hasScroll && <HiChevronRight onClick={clickRight} className="w-5 h-5 text-gray-400 stroke-[1.25]" />}
                        </>
                    )}
                </div>

                {filteredActions.length > 0 && (
                    <div className="flex items-center gap-3 bg-gray-100">
                        {filterOptions.length > 0 && <div className="w-[1px] h-full bg-gray-300" />}
                        <nav className="flex items-center gap-2">
                            {filteredActions.map((action) => (
                                <Action key={`${action.title}-${action.as}-${action.href}`} {...action} />
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </section>
    );
}
