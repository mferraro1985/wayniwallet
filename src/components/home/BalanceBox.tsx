import userStore from "@/stores/UserStore";
import UserAvatar from "../ui/UserAvatar";
import { formatCurrency } from "@/utils/helpers";

interface BalanceBoxProp {
	showProfile?: boolean;
}
export default function BalanceBox({
	showProfile= false,
}: BalanceBoxProp) {
	const { balance } = userStore();
	return (
		<div className="flex flex-col gap-[2.625rem] p-4">
			{showProfile && <UserAvatar />}
			<div className="flex flex-col items-center gap-2">
				<p className="text-base/[1.1875rem]">Your Balance</p>
				<p className="font-bold text-[2rem] leading-[2.4375rem]">{formatCurrency(balance)}</p>
			</div>
		</div>
	);
}
