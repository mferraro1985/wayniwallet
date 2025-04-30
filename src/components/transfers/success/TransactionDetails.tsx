"use client";
import { formatCurrency, formatLongDate, formatTime } from "@/utils/helpers";

export default function TransactionDetails({
	amount,
	description,
	date,
	referenceNumber,
}: {
	amount: number;
	description: string;
	date: string;
	referenceNumber: string;
}) {

	return (
		<div className="flex flex-col gap-2 pb-10">
			<p className="text-lg font-bold ">Transaction Details</p>
			<div className="grid grid-cols-2 gap-3 text-sm leading-[1.5]">
				<div className="text-neutral-400">Payment</div>
				<div className="font-bold text-right">{formatCurrency(amount)}</div>
				<div className="text-neutral-400">Notes</div>
				<div className="font-bold text-right">{description}</div>
				<div className="text-neutral-400">Date</div>
				<div className="font-bold text-right">{formatLongDate(date)}</div>
				<div className="text-neutral-400">Time</div>
				<div className="font-bold text-right">{formatTime(date)}</div>
				<div className="text-neutral-400">Reference Number</div>
				<div className="font-bold text-right">{referenceNumber}</div>
			</div>
		</div>
	);
}
