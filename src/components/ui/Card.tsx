import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/twMerge";

const cardVariants = cva("flex flex-col bg-white text-black overflow-x-hidden", {
	variants: {
		variant: {
			default: "rounded-t-[2.5rem] px-5 pt-8",
			secondary: "rounded-3xl",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

interface CardProps extends VariantProps<typeof cardVariants> {
	className?: string;
	children: ReactNode;
}
export default function Card({ variant, className, children }: CardProps) {
	return (
		<div className={cn(cardVariants({ variant, className }))}>{children}</div>
	);
}
