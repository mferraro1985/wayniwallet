export const formatCurrency = (
	amount: number,
	locale = "es-AR",
	currency = "ARS",
): string => {
	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency: currency,
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	}).format(amount);
};

export function formatDate(isoDate: string) {
	const date = new Date(isoDate);

	const datePart = new Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	}).format(date);

	const timePart = new Intl.DateTimeFormat("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	}).format(date);

	return `${datePart} · ${timePart}`;
}

export function formatTime(isoDate: string): string {
	const date = new Date(isoDate);
	return date.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	});
}

export function formatLongDate(isoDate: string): string {
	const date = new Date(isoDate);
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}
