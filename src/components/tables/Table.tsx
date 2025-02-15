import React from 'react';

interface Props extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
    children: React.ReactNode;
}

export default function Table({ children, ...props }: Props) {
    return (
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 text-sm">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-gray-300 ring-opacity-5 md:rounded-lg">
                    <table {...props} className="min-w-full divide-y divide-gray-300">
                        {children}
                    </table>
                </div>
            </div>
        </div>
    )
}
