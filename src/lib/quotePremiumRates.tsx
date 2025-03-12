import React from "react";

export interface QuotePremiumRate {
    value: number;
    island: string;
    vehicle_type: string;
    dealer: string;
    base_annual_premium: number;
}

interface QuotePremiumRatesContextInterface {
    quotePremiumRates: QuotePremiumRate[];
    setQuotePremiumRates: (rates: QuotePremiumRate[]) => void;
}

export function QuotePremiumRatesProvider({ children }: { children: React.ReactNode }) {
    const [quotePremiumRates, setQuotePremiumRates] = React.useState<QuotePremiumRate[]>([]);

    return (
        <QuotePremiumRatesContext.Provider value={{ quotePremiumRates, setQuotePremiumRates }}>
            {children}
        </QuotePremiumRatesContext.Provider>
    );
}

export const QuotePremiumRatesContext = React.createContext<QuotePremiumRatesContextInterface>({ quotePremiumRates: [], setQuotePremiumRates: () => {} });

export const useQuotePremiumRates = () => React.useContext(QuotePremiumRatesContext);
