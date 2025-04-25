import Avatar from "../ui/Avatar";

interface BalanceBoxProp {
	fullname: string;
	avatar?: string;
	balance: string;
}
export default function BalanceBox({
	fullname,
	avatar,
	balance,
}: BalanceBoxProp) {
	return (
		<div className="flex flex-col gap-12 p-4">
			<div className="inline-flex items-center gap-[0.3125rem] text-[0.9375rem] font-bold">
				<Avatar src={avatar} size="sm" /> {fullname}
			</div>
			<div className="flex flex-col items-center gap-2">
				<p className="text-base/[1.1875rem]">Your Balance</p>
				<p className="font-bold text-[2rem] leading-[2.4375rem]">$ {balance}</p>
			</div>
		</div>
	);
}
