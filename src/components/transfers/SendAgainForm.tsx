import { Button } from "../ui/Button";
import CurrencyInputCustom from "../ui/CurrencyInput";
import Icon from "../ui/Icon";
import { TextArea } from "../ui/TextArea";
import { useState } from "react";
import { TransactionService } from "@/services/transaction.service";
import { useRouter } from "next/navigation";

interface SendAgainFormProps {
	contactId: string;
	balance: number;
}

export default function SendAgainForm({
	balance,
	contactId,
}: SendAgainFormProps) {
	const [comment, setComment] = useState("");
	const [amount, setAmount] = useState(0);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		try {
			const result = await TransactionService.sendTransfer({
				amount,
				comment,
				targetUser: contactId,
			});
			router.push(`/transfers/${result.id}/success`);
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};
	return (
		<div className="flex flex-col gap-2 items-center grow-1 ">
			<h2 className="text-xl text-neutral-900">Set amount</h2>
			<form
				action=""
				className="flex flex-col gap-4 items-center w-full grow-1"
				onSubmit={handleSubmit}
			>
				<CurrencyInputCustom
					disabled={loading}
					initialValue={amount}
					limit={balance}
					onChange={(value, error) => {
						setAmount(value);
						setError(error);
					}}
				/>
				<label htmlFor="notes" className="text-lg self-start">
					Notes
				</label>
				<TextArea
					disabled={loading}
					id="notes"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				/>
				<Button
					type="submit"
					disabled={amount === 0 || error || loading}
					variant="submit"
					size="xl"
					className="w-full mt-auto"
				>
					{loading ? (
						<>
							<Icon name="loader" className="animate-spin invert" /> Sending...
						</>
					) : (
						"Proceed to Transfer"
					)}
				</Button>
			</form>
		</div>
	);
}
