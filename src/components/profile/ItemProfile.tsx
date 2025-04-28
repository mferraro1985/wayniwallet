import { cn } from "@/utils/twMerge";
import { cva, type VariantProps } from "class-variance-authority";

const valueVariants = cva("text-base truncate overflow-hidden", {
	variants: {
		variant: {
			default: "font-bold",
			secondary: "text-neutral-400"
		}
	},
	defaultVariants: {
		variant: "default"
	}
});

interface ItemProfileProps extends VariantProps<typeof valueVariants> {
	label: string;
	value: string;
	className?: string;
}

export default function ItemProfile({ 
	label, 
	value, 
	className, 
	variant 
}: ItemProfileProps) {
	return (
		<div className={cn("flex justify-between gap-2", className)}>
			<div className="text-neutral-400 text-base">{label}</div>
			<div className={cn(valueVariants({ variant }))}>{value}</div>
		</div>
	);
}
