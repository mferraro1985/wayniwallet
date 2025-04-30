"use client";
import TransferHeader from "@/components/transfers/TransferHeader";
import TransferList from "@/components/transfers/TransferList";
import Avatar from "@/components/ui/Avatar";
import Card from "@/components/ui/Card";
import List from "@/components/ui/List";
import { PageHeader } from "@/components/ui/PageHeader";
import { TransactionService } from "@/services/transaction.service";
import { formatCurrency, formatDate } from "@/utils/helpers";
import { useQuery } from "@tanstack/react-query";

export default function TransferPage() {
	const { data: transafersData, isLoading: transfersIsLoading } = useQuery({
		queryKey: ["transfers"],
		queryFn: () => TransactionService.getAllTransfers(),
		refetchOnWindowFocus: true,
		// biome-ignore lint/style/useNumberNamespace: <explanation>
		staleTime: 1000 * 60,
	});
	return (
		<>
			<PageHeader title="Transfers" />
			<Card className="grow-1 gap-8 flex flex-col overflow-y-hidden">
				<TransferHeader />
				<TransferList transfers={transafersData} loading={transfersIsLoading}/>
			</Card>
		</>
	);
}
