import UserAvatar from "../ui/UserAvatar";
import { formatCurrency } from "@/utils/helpers";

interface BalanceBoxProp {
	amount: number;
}
export default function BalanceBox({ amount }: BalanceBoxProp) {
	return (
		<div className="flex flex-col items-center gap-2">
			<p className="text-base/[1.1875rem]">Your Balance</p>
			<p className="font-bold text-[2rem] leading-[2.4375rem]">
				{formatCurrency(amount)}
			</p>
		</div>
	);
}
