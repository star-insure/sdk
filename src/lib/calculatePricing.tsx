import { addGst } from ".";
import type { PolicyEnhancement, QuoteRequestPurchaseOption } from "../types";

interface CalculationArguments {
    option: QuoteRequestPurchaseOption;
    selectedEnhancements: PolicyEnhancement['id'][];
    brokerFee?: number;
}

function calculateMonthly({ option, selectedEnhancements }: CalculationArguments) {
    const premium = option.monthly_premium || 0;

    const enhancementsCost = selectedEnhancements.reduce((acc, id) => {
        const enhancement = option.enhancements?.find(e => e.id === id);
        if (!enhancement) return acc;
        const enhancementPremium = calcMonthlyEnhancementPrice(enhancement);

        if (!acc) {
            return enhancementPremium;
        }

        return acc + enhancementPremium;
    }, 0) || 0;

    return premium + enhancementsCost;
}

function calculateAnnually({ option, selectedEnhancements, brokerFee = 0 }: CalculationArguments) {
    const premium = option.premium || 0;
    const fsl = option.fsl || 0;
    const enhancementsCost = selectedEnhancements.reduce((acc, id) => {
        const enhancement = option.enhancements?.find(e => e.id === id);
        if (!enhancement) return acc;
        return (acc || 0) + (enhancement.premium || 0);
    }, 0) || 0;

    return premium + fsl + enhancementsCost + brokerFee;
}

export function calcMonthlyEnhancementPrice(enhancement: PolicyEnhancement): number {
    if (!enhancement.premium) return 0;

    const monthlyPremium = (enhancement.premium / 100) / 12;

    if (enhancement.disable_rounding) {
        return Math.round(monthlyPremium * 100);
    }

    return Math.round(Math.ceil(monthlyPremium) * 100);
}

export function calcPurchaseOptionPricing({ option, selectedEnhancements, brokerFee = 0 }: CalculationArguments) {
    const monthly = calculateMonthly({ option, selectedEnhancements });
    const annually = calculateAnnually({ option, selectedEnhancements, brokerFee });
    const monthlyWithGst = addGst(monthly);
    const annuallyWithGst = addGst(annually);

    return {
        monthly,
        annually,
        monthlyWithGst,
        annuallyWithGst,
    };
}
