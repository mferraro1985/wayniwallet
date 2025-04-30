"use client";
import { formatCurrency } from "@/utils/helpers";

export default function AmountDetail({ amount }: { amount: number }) {
	return (
		<div>
			<h2 className="text-lg font-bold text-background w-full text-center">
				Transfer successful
			</h2>
			<p className="text-neutral-400 text-base w-full text-center">
				Your transaction was successfull
			</p>
			<p className="w-full text-center text-[2.5rem] font-bold text-neutral-900 mt-4">
				{formatCurrency(amount)}
			</p>
		</div>
	);
}
