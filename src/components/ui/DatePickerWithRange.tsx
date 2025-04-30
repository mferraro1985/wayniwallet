"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import type { DateRange } from "react-day-picker";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { Button } from "./Button";
import Icon from "./Icon";
import { cn } from "@/utils/twMerge";
import { Calendar } from "./Calendar";

export function DatePickerWithRange({
	className,
}: React.HTMLAttributes<HTMLDivElement>) {
	const [date, setDate] = React.useState<DateRange | undefined>({
		from: new Date(2022, 0, 20),
		to: addDays(new Date(2022, 0, 20), 20),
	});

	return (
		<div className={cn("grid gap-2", className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Button variant="ghost" size="icon">
						<Icon name="calendar" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="flex w-auto flex-col space-y-2 p-2" >
					<Calendar
						mode="range"
						defaultMonth={date?.from}
						selected={date}
						onSelect={setDate}
						numberOfMonths={1}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}
