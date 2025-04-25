import Avatar from "../ui/Avatar";

interface BalanceBoxProp {
	fullname: string;
	avatar?: string;
	balance: number;
}
export default function BalanceBox({
	fullname,
	avatar,
	balance,
}: BalanceBoxProp) {
	return (
		<div className="flex flex-col gap-12">
			<div className="inline-flex items-center gap-[0.3125rem] text-[0.9375rem] font-bold">
				<Avatar src={avatar} text={fullname} size="sm" /> {fullname}
			</div>
		</div>
	);
}
