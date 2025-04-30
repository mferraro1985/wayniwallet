"use client";
import BalanceBox from "@/components/ui/BalanceBox";
import ContactList from "@/components/home/ContactList";
import TransactionList from "@/components/home/TransactionList";
import Card from "@/components/ui/Card";
import NavBar from "@/components/ui/NavBar";
import UserAvatar from "@/components/ui/UserAvatar";
import useFetchUserData from "@/hooks/useFechUserData";
import { ContactService } from "@/services/contact.service";
import { TransactionService } from "@/services/transaction.service";
import { useQuery } from "@tanstack/react-query";

export default function HomePage() {
	const { data: user, isLoading: userIsLoading } = useFetchUserData();

	const { data: contactsData, isLoading: contactIsLoading } = useQuery({
		queryKey: ["contacts"],
		queryFn: () => ContactService.getAllContacts(),
		refetchOnWindowFocus: true,
		// biome-ignore lint/style/useNumberNamespace: <explanation>
		staleTime: Infinity,
	});

	const { data: transactionsData, isLoading: transactionIsLoading } = useQuery({
		queryKey: ["transactions"],
		queryFn: () => TransactionService.getAllTransaction(),
		refetchOnWindowFocus: true,
		// biome-ignore lint/style/useNumberNamespace: <explanation>
		staleTime: 0,
		refetchOnMount: true,
	});

	return (
		<>
			<div className="flex flex-col gap-[2.625rem] p-4">
				<UserAvatar
					loading={userIsLoading}
					fullname={user?.profile.fullName || ""}
					avatar={user?.profile.avatar || ""}
				/>
				<BalanceBox amount={user?.balance || 0} />
			</div>

			<Card className="grow-1 gap-8">
				<ContactList contacts={contactsData} loading={contactIsLoading} />
				<TransactionList
					transactions={transactionsData}
					loading={transactionIsLoading}
				/>
			</Card>
			<NavBar />
		</>
	);
}
