import Avatar from "./Avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { Skeleton } from "./Skeleton";
import { cn } from "@/utils/twMerge";

const SIZE_MAPPING = {
	profile: "xl",
	contact: "lg",
	transfer: "base",
	header: "sm",
} as const;

const userAvatarVariants = cva("", {
	variants: {
		variant: {
			header:
				"font-bold inline-flex items-center gap-[0.3125rem] text-[0.9375rem]",
			profile: "font-bold flex flex-col items-center text-[2rem] gap-4",
			contact: "flex flex-col items-center font-regular text-sm gap-4",
			transfer: "inline-flex items-center gap-[0.3125rem] text-base",
		},
	},
	defaultVariants: {
		variant: "header",
	},
});

const skeletonVariants = cva("rounded-full", {
	variants: {
		variant: {
			header: "w-[2.125rem] h-[2.125rem]",
			profile: "w-[14.8125rem] h-[14.8125rem]",
			contact: "w-[4.0625rem] h-[4.0625rem]",
			transfer: "w-[3rem] h-[3rem]",
		},
	},
	defaultVariants: {
		variant: "header",
	},
});

interface UserAvatarProps extends VariantProps<typeof userAvatarVariants> {
	avatar: string;
	firstname: string;
	lastname: string;
	loading?: boolean;
	className?: string;
}

export default function UserAvatar({
	variant,
	avatar,
	firstname,
	lastname,
	loading,
	className,
}: UserAvatarProps) {
	const fullName = `${firstname} ${lastname}`;
	return (
		<div className={cn(userAvatarVariants({ variant }), className)}>
			{!loading && (
				<>
					<Avatar src={avatar} size={SIZE_MAPPING[variant ?? "header"]} />
					{variant !== "transfer" && <p>{fullName}</p>}
					{variant === "transfer" && (
						<div>
							<p>{firstname}</p>
							<p>{lastname}</p>
						</div>
					)}
				</>
			)}
			{loading && (
				<>
					<Skeleton className={cn(skeletonVariants({ variant }))} />
					<Skeleton className="h-5 w-30" />
				</>
			)}
		</div>
	);
}
