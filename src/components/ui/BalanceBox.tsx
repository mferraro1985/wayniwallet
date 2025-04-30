import { formatCurrency } from "@/utils/helpers";
import { cn } from "@/utils/twMerge";

interface BalanceBoxProp {
	amount: number;
	variant?: "default" | "secondary";
}


export default function BalanceBox({ amount, variant }: BalanceBoxProp) {
	return (
		<div className="flex flex-col items-center gap-2">
			<p className={cn("text-base/[1.1875rem]", variant === "secondary" && "text-sm")}>Your Balance</p>
			<p className={cn("font-bold text-[2rem] leading-[2.4375rem]", variant === "secondary" && "text-[1.5rem] leading-7")}>
				{formatCurrency(amount)}
			</p>
		</div>
	);
}
