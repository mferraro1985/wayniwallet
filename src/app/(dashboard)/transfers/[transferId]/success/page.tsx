"use client";
import Card from "@/components/ui/Card";
import ActionsButons from "@/components/transfers/success/ActionsButons";
import DetailList from "@/components/transfers/success/TransactionDetails";
import SendTo from "@/components/transfers/success/SendTo";
import AmountDetail from "@/components/transfers/success/AmountDetail";
import { use } from "react";
import { useQuery } from "@tanstack/react-query";
import { TransactionService } from "@/services/transaction.service";

export default function SuccessPage({
	params,
}: {
	params: Promise<{ transferId: string }>;
}) {
	const { transferId } = use(params);
	const { data: transfer, isLoading: transferIsLoading } = useQuery({
		queryKey: ["transfer", transferId],
		queryFn: () => TransactionService.getTransferById(transferId),
		refetchOnWindowFocus: true,
		// biome-ignore lint/style/useNumberNamespace: <explanation>
		staleTime: Infinity,
	});
	return (
		<div className="flex flex-col justify-evenly gap-10 grow-1 p-4">
			<Card className="flex flex-col px-4 py-6 gap-10" variant="secondary">
				<AmountDetail amount={transfer?.amount || 0} />
				<SendTo />
				<DetailList amount={transfer?.amount || 0} description={transfer?.description || ""} date={transfer?.date || ""} referenceNumber={transfer?.id || ""} />
			</Card>
			<ActionsButons />
		</div>
	);
}
