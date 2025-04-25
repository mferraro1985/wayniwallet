import type React from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/twMerge";

const avatarVariants = cva(
	"rounded-full flex shrink-0 items-center justify-center overflow-hidden font-semibold",
	{
		variants: {
			size: {
				sm: "w-[2.125rem] h-[2.125rem] text-sm",
				md: "w-[3.25rem] h-[3.25rem] text-xl",
				lg: "w-[4.0625rem] h-[4.0625rem] text-3xl",
				xl: "w-[14.8125rem] h-[14.8125rem] text-9xl",
			},
			variant: {
				default: "bg-purple-50 text-gray-600",
			},
		},
		defaultVariants: {
			size: "md",
			variant: "default",
		},
	},
);

interface AvatarProps extends VariantProps<typeof avatarVariants> {
	src?: string | null;
	text?: string;
	alt?: string;
	className?: string;
	customSize?: number;
}

const Avatar: React.FC<AvatarProps> = ({
	src,
	text,
	alt = "User avatar",
	size,
	variant,
	className,
	customSize = 40,
}) => {

	const getInitials = () => {
		if (!text) return "?";
		return text
			.trim()
			.split(/\s+/)
			.map((word) => word[0])
			.join("")
			.toUpperCase()
			.slice(0, 2);
	};

	return (
		<div
			className={cn(avatarVariants({ size, variant, className }))}
			aria-label={alt}
			title={alt}
		>
			{src && (
				<Image
					src={src}
					alt={alt}
					width={customSize}
          height={customSize}
					className="w-full h-full object-cover"
				/>
			)}
			{!src && text && <span>{getInitials()}</span>}
		</div>
	);
};

export default Avatar;
