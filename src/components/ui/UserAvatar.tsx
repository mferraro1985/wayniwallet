import Avatar from "./Avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { Skeleton } from "./Skeleton";
import { cn } from "@/utils/twMerge";

const userAvatarVariants = cva(" font-bold", {
	variants: {
		size: {
			small: "inline-flex items-center gap-[0.3125rem] text-[0.9375rem]",
			big: "flex flex-col items-center text-[2rem] gap-4",
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
}
export default function UserAvatar({
	size,
	avatar,
	fullname,
	loading,
}: UserAvatarProps) {
	return (
		<div className={userAvatarVariants({ size })}>
			{!loading && (
				<>
					<Avatar src={avatar} size={size === "big" ? "xl" : "sm"} /> {fullname}
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
