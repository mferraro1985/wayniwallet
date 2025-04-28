import { cn } from "@/utils/twMerge";
import Avatar from "../ui/Avatar";
import Icon, { type iconNames } from "../ui/Icon";
import List from "../ui/List";
import { type Transaction, TransactionTypes } from "@/types/commons";

type IconByType = Record<TransactionTypes, keyof typeof iconNames>;

export default function TransactionList() {
	
	const transactions: Transaction[] = [
		{
			id: "saraza",
			description: "Internet",
			date: "May 16, 2023 · 17:34",
			amount: "-$ 24.000",
			type: TransactionTypes.Payment,
		},
		{
			id: "sarazasst",
			description: "Internet",
			date: "May 16, 2023 · 17:34",
			amount: "-$ 24.000",
			type: TransactionTypes.Payment,
		},
		{
			id: "sarazaaa", 
			description: "CashIn",
			date: "May 16, 2023 · 17:34",
			amount: "$ 100.000",
			type: TransactionTypes.CashIn,
		},
		{
			id: "sarazaauua",
			description: "Transfer",
			date: "May 16, 2023 · 17:34",
			amount: "$ -10.000", 
			type: TransactionTypes.Transfer,
		},
		{
			id: "sarazaauua1",
			description: "Transfer",
			date: "May 16, 2023 · 17:34",
			amount: "$ -10.000",
			type: TransactionTypes.Transfer,
		},
		{
			id: "sarazaauua2",
			description: "Transfer",
			date: "May 16, 2023 · 17:34<",
			amount: "$ -10.000",
			type: TransactionTypes.Transfer,
		},
		{
			id: "sarazaauua3",
			description: "Transfer",
			date: "May 16, 2023 · 17:34",
			amount: "$ -10.000",
			type: TransactionTypes.Transfer,
		},
		{
			id: "sarazaauua4",
			description: "Transfer",
			date: "May 16, 2023 · 17:34",
			amount: "$ -10.000",
			type: TransactionTypes.Transfer,
		},
	];

	const iconByType: IconByType = {
		cashIn: "wallet",
		payment: "arrow-down",
		transfer: "transfer",
	};

	return (
		<div className="flex flex-col gap-6 overflow-y-hidden">
			<div className="font-bold self-center text-xl text-neutral-900">
				Latest Transaction
			</div>
			<List className="overflow-y-scroll">
				{transactions.map((item) => (
					<List.Item key={item.id}>
						<div className="flex items-center space-x-4">
							<Avatar>
								<Icon name={iconByType[item.type]} size={28} />
							</Avatar>
							<div>
								<p className="text-lg">{item.description}</p>
								<p className="text-sm text-neutral-400">{item.date}</p>
							</div>
						</div>
						<div
							className={cn(
								"font-bold text-red-600",
								item.type === "cashIn" && "text-green-500",
							)}
						>
							{item.amount}
						</div>
					</List.Item>
				))}
			</List>
		</div>
	);
}
