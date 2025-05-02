import { formatCurrency, formatDate } from "@/utils/helpers";
import Avatar from "../ui/Avatar";
import List from "../ui/List";
import type { TransferTransaction } from "@/types/transaction";
interface TransfersListProps {
	transfers?: TransferTransaction[];
    loading: boolean
}
export default function TransferList({ transfers }: TransfersListProps) {
	return (
		<List className="overflow-y-scroll">
			{transfers?.map((transfer) => (
				<List.Item key={transfer.id}>
					<div className="flex items-center space-x-4">
						<Avatar src={transfer.targetUser.avatar} />
						<div>
							<p className="text-lg">{transfer.targetUser.firstName}</p>
							<p className="text-sm text-neutral-400">
								{formatDate(transfer.date)}
							</p>
						</div>
					</div>
					<div className="font-bold text-neutral-900">
						{formatCurrency(transfer.amount)}{" "}
					</div>
				</List.Item>
			))}
		</List>
	);
}
