import { useState } from "react";
import { Button } from "../ui/Button";
import Icon from "../ui/Icon";
import type { DateRange } from "react-day-picker";

export default function TransferHeader() {
	const [date, setDate] = useState<DateRange | undefined>();
	return (
		<div className="flex justify-between items-center">
			<h1 className="font-bold text-xl text-neutral-900">Latest Transfer</h1>
			<Button variant="ghost" size="icon">
				<Icon name="calendar" />
			</Button>
			
		</div>
	);
}
