"use client";
import userStore from "@/stores/UserStore";
import Avatar from "./Avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { Skeleton } from "./Skeleton";
import { cn } from "@/utils/twMerge";

const userAvatarVariants = cva(" font-bold", {
	variants: {
		size: {
			small:
				"inline-flex items-center gap-[0.3125rem] text-[0.9375rem]",
			big: "flex flex-col items-center text-[2rem] gap-4",
		},
	},
	defaultVariants: {
		size: "small",
	},
});

interface UserAvatarProps extends VariantProps<typeof userAvatarVariants> {}
export default function UserAvatar({ size }: UserAvatarProps) {
	const { user, isLoading } = userStore();
	return (
		<div className={userAvatarVariants({size})}>
			{!isLoading && <><Avatar src={user.avatar} size={size === "big"? "xl":"sm"} /> {user.fullName}</>}
			{isLoading && <><Skeleton className={cn("w-[2.125rem] h-[2.125rem] rounded-full", size === "big" && "w-[14.8125rem] h-[14.8125rem]")} /> <Skeleton className="h-5 w-30" /></>}
		</div>
	);
}
