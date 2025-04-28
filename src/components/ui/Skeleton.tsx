import { cn } from "@/utils/twMerge";
import { cva, type VariantProps } from "class-variance-authority";

const skeletonVariants = cva("animate-pulse rounded-md", {
	variants: {
		bg: {
			light: "bg-neutral-100",
			dark: "bg-neutral-800",
		},
	},
	defaultVariants: {
		bg: "light",
	},
});

interface SkeletonProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof skeletonVariants> {}

function Skeleton({ className, bg, ...props }: SkeletonProps) {
	return <div className={cn(skeletonVariants({ bg }), className)} {...props} />;
}

export { Skeleton };
