import BalanceBox from "@/components/home/BalanceBox";
import SendAgain from "@/components/home/SendAgain";
import TransactionList from "@/components/home/TransactionList";
import Card from "@/components/ui/Card";
import NavBar from "@/components/ui/NavBar";

export default function HomePage() {
	return (
		<>
			<BalanceBox
				fullname="Juan Perez"
				avatar="https://randomuser.me/api/portraits/women/96.jpg"
				balance="2.800"
			/>
			<Card className="grow-1 gap-8">
				<SendAgain />
				<TransactionList />
			</Card>
			<NavBar />
		</>
	);
}
