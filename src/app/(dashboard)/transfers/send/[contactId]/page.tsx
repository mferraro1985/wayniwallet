"use client";
import { use } from "react";
import Card from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import BalanceBox from "@/components/ui/BalanceBox";
import useFetchUserData from "@/hooks/useFechUserData";
import { useQuery } from "@tanstack/react-query";
import { ContactService } from "@/services/contact.service";
import UserAvatar from "@/components/ui/UserAvatar";
import SendAgainForm from "@/components/transfers/SendAgainForm";

export default function SendPage({
	params,
}: {
	params: Promise<{ contactId: string }>;
}) {
	const { contactId } = use(params);
	const { data: user } = useFetchUserData();
	const { data: contactsData, isLoading: contactIsLoading } = useQuery({
		queryKey: ["contactsId", contactId],
		queryFn: () => ContactService.getContactById(contactId),
		refetchOnWindowFocus: false,
		// biome-ignore lint/style/useNumberNamespace: <explanation>
		staleTime: Infinity,
	});
	return (
		<>
			<div className="flex flex-col mb-8">
				<PageHeader title="Send again" backHref="/" />
				<BalanceBox amount={user?.balance || 0} variant="secondary" />
			</div>
			<Card className="grow-1 gap-6 pb-7">
				<UserAvatar
					fullname={contactsData?.fullName || ""}
					avatar={contactsData?.avatar || ""}
					size="medium"
					loading={contactIsLoading}
				/>
				<SendAgainForm balance={user?.balance || 0} contactId={contactId}/>
			</Card>
		</>
	);
}
