export const formatCurrency = (
    amount: number,
    locale = 'es-AR',
    currency = 'ARS'
): string => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(amount);
};

