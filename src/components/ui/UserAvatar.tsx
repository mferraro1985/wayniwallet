import Avatar from "./Avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { Skeleton } from "./Skeleton";
import { cn } from "@/utils/twMerge";

const userAvatarVariants = cva("", {
	variants: {
		size: {
			small: "font-bold inline-flex items-center gap-[0.3125rem] text-[0.9375rem]",
			medium: "flex flex-col items-center font-regular text-sm gap-4",
			big: "font-bold flex flex-col items-center text-[2rem] gap-4",
		},
	},
	defaultVariants: {
		size: "small",
	},
});

interface UserAvatarProps extends VariantProps<typeof userAvatarVariants> {
	avatar: string;
	fullname: string;
	loading: boolean;
	className?: string;
}
export default function UserAvatar({
	size,
	avatar,
	fullname,
	loading,
	className,
}: UserAvatarProps) {
	return (
		<div className={cn(userAvatarVariants({ size }), className)}>
			{!loading && (
				<>
					<Avatar src={avatar} size={size === "big" ? "xl" : size === "medium" ? "lg" : "sm"} /> {fullname}
				</>
			)}
			{loading && (
				<>
					<Skeleton
						className={cn(
							"w-[2.125rem] h-[2.125rem] rounded-full",
							size === "big" && "w-[14.8125rem] h-[14.8125rem]",
						)}
					/>{" "}
					<Skeleton className="h-5 w-30" />
				</>
			)}
		</div>
	);
}
