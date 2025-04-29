import { cn } from "@/utils/twMerge";
import Avatar from "../ui/Avatar";
import Icon from "../ui/Icon";
import List from "../ui/List";
import type { TransactionType } from "@/types/transaction";
import { formatCurrency, formatDate } from "@/utils/helpers";

interface TransactionListProps {
	transactions?: TransactionType[];
	loading: boolean;
}
export default function TransactionList({
	transactions,
}: TransactionListProps) {
	return (
		<div className="flex flex-col gap-6 overflow-y-hidden">
			<div className="font-bold self-center text-xl text-neutral-900">
				Latest Transaction
			</div>
			<List className="overflow-y-scroll">
				{transactions?.map((item) => (
					<List.Item key={item.id}>
						<div className="flex items-center space-x-4">
							<Avatar>
								<Icon name={item.icon} size={28} />
							</Avatar>
							<div>
								<p className="text-lg">{item.name}</p>
								<p className="text-sm text-neutral-400">
									{formatDate(item.date)}
								</p>
							</div>
						</div>
						<div
							className={cn(
								"font-bold text-red-600",
								"paymentMethod" in item && "text-green-500",
							)}
						>
							{item.amount > 0 ? "+" : "-"} {formatCurrency(item.amount)}
						</div>
					</List.Item>
				))}
			</List>
		</div>
	);
}
