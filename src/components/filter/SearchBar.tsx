import { router } from "@inertiajs/react";
import React from "react";
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";
import { useClickOutside } from "../../lib";

interface Props {
    search?: string;
    active: boolean;
    onActive: Function;
    placeholder?: string;
    focusSearchShortcut?: boolean;
}

export default function SearchBar({ search, active, onActive, placeholder, focusSearchShortcut = false }: Props) {
    const [query, setQuery] = React.useState<string>('');

    const searchRef = React.useRef<HTMLDivElement | null>(null);

    /**
     * Populate search input on load
     */
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            // Populate search
            const search = new URLSearchParams(window.location.search);

            const q = search.get('search') as string;

            if (q) {
                setQuery(q);
                onActive(true);
            }
        }

        const listener = (e: KeyboardEvent) => {
            if (focusSearchShortcut && e.key === '/') {
                e.preventDefault();
                onActive(true);
            }

            if (e.key === 'Escape') {
                onActive(false);
            }
        };

        window.addEventListener('keydown', listener);

        return () => {
            window.removeEventListener('keydown', listener);
        };
    }, [focusSearchShortcut]);

    /**
     * Minimise the search bar on click outside if there's no search query
     */
    useClickOutside(searchRef, () => {
        if (!query) {
            onActive(false);
        }
    });

    /**
     * Handle the search function
     */
    function handleSearch(e?: React.FormEvent, queryOverride?: string) {
        e?.preventDefault();

        if (typeof search !== 'string') return;

        let path: string = search;
        if (path[0] !== '/') {
            path = `/${path}`;
        }

        const params = new URLSearchParams(window?.location.search);
        params.set('search', queryOverride ?? query);
        params.set('page', '1');

        router.get(`${path}?${params.toString()}`);
    }

    return (
        <div ref={searchRef} className="">
            {!active && (
                <button
                    title="Open Search Bar"
                    type="button"
                    onClick={() => onActive(true)}
                    className="flex items-center justify-center rounded-full hover:text-teal p-1 hover:bg-gray-100"
                >
                    <HiMagnifyingGlass className="h-5 w-5 stroke-[1.25]" />
                </button>
            )}
            {active && (
                <form
                    onSubmit={handleSearch}
                    className="group flex items-center gap-2 rounded-full bg-white pr-4 pl-1 shadow transition-all focus-within:outline-none focus-within:ring-1 focus-within:ring-teal"
                >
                    <input
                        type="text"
                        name="search"
                        id="search"
                        value={query}
                        onChange={(e) => setQuery(e.currentTarget.value || '')}
                        className="!focus:border-0 !border-0 !bg-transparent !shadow-none !ring-opacity-0 !transition-none placeholder:text-gray-400 !py-1.5 text-sm"
                        autoFocus
                        placeholder={placeholder}
                    />
                    {query && (
                        <button
                            type="button"
                            title="Clear Search"
                            onClick={() => {
                                setQuery('');
                                handleSearch(undefined, '');
                            }}
                        >
                            <HiXMark className="h-5 w-5" />
                        </button>
                    )}
                    <button type="submit">
                        <HiMagnifyingGlass className="h-5 w-5" />
                    </button>
                </form>
            )}
        </div>
    );
}
