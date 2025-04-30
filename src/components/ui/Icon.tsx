import React from "react";
import Image from "next/image";
import { cn } from "@/utils/twMerge";

export const iconNames = {
	"arrow-left": "/assets/arrow_left_alt.svg",
	"arrow-down": "/assets/arrow_down.svg",
	history: "/assets/history.svg",
	profile: "/assets/profile.svg",
	transfer: "/assets/transfer.svg",
	wallet: "/assets/wallet.svg",
	calendar: "/assets/calendar.svg",
	chevronLeft: "/assets/chevron-left.svg",
	chevronRight: "/assets/chevron-right.svg",
	loader: "/assets/loader.svg"
};

interface IconProps {
	name: keyof typeof iconNames;
	size?: number;
	className?: string;
}

export default function Icon({
	name,
	size = 24,
	className,
	...props
}: IconProps) {
	const iconPath = iconNames[name];

	if (!iconPath) {
		console.error(`Icon "${name}" not found`);
		return (
			<div
				className={cn(
					"flex items-center justify-center bg-red-100 text-red-600 rounded-md",
					className,
				)}
				style={{ width: size, height: size }}
			>
				?
			</div>
		);
	}

	return (
		<Image
			src={iconPath}
			alt={name}
			width={size}
			height={size}
			className={cn("inline-block flex-shrink-0", className)}
			{...props}
		/>
	);
}
