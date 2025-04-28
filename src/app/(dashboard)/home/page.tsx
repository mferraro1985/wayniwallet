"use client";
import BalanceBox from "@/components/home/BalanceBox";
import SendAgain from "@/components/home/SendAgain";
import TransactionList from "@/components/home/TransactionList";
import Card from "@/components/ui/Card";
import NavBar from "@/components/ui/NavBar";
import useFetchUser from "@/hooks/useFechUser";


export default function HomePage() {
	useFetchUser()

	return (
		<>
			<BalanceBox showProfile />
			<Card className="grow-1 gap-8">
				<SendAgain />
				<TransactionList />
			</Card>
			<NavBar />
		</>
	);
}
