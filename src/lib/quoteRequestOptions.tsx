import React from 'react';
import { QuoteRequestOptions } from '../types';

interface QuoteRequestFormContextInterface {
    options?: QuoteRequestOptions;
    setOptions: (options: QuoteRequestOptions) => void;
}

const QuoteRequestOptionsContext = React.createContext<QuoteRequestFormContextInterface>({ setOptions: () => {} });

export function QuoteRequestOptionsProvider({ children }: { children: React.ReactNode }) {
    const [options, setOptions] = React.useState<QuoteRequestOptions>();

    return (
        <QuoteRequestOptionsContext.Provider value={{ options, setOptions }}>
            {children}
        </QuoteRequestOptionsContext.Provider>
    )
}

export const useQuoteRequestOptions = () => React.useContext(QuoteRequestOptionsContext);
