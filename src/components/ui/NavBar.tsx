import Link from "next/link";
import Icon, { type iconNames } from "./Icon";
import { Button } from "./Button";
import { cn } from "@/utils/twMerge";

interface NavItem {
	title: string;
	path: string;
	icon: keyof typeof iconNames;
	active?: boolean;
}
export default function NavBar() {
	const navItemMock: NavItem[] = [
		{
			title: "Home",
			path: "/home",
			icon: "transfer",
			active: true,
		},
		{
			title: "Transfers",
			path: "/transfers",
			icon: "history",
		},
		{
			title: "Profile",
			path: "/profile",
			icon: "profile",
		},
	];
	return (
		<div className="sticky bottom-0 bg-white px-5 text-neutral-400 border-t-2 border-[#F1F1F1] shadow-[0_-8px_20px_rgba(172,172,172,0.1)]">
			<div className="flex items-center">
				{navItemMock.map((item) => (
					<Button
						key={item.title}
						asChild
						variant="ghost"
						size="icon"
						className="w-auto h-auto gap-1 grow-1 py-4 "
					>
						<Link href={item.path} aria-label={item.title} className="flex-col">
							<Icon name={item.icon} size={32} />
							<span className={cn("text-sm", item.active && "text-purple-800")}>{item.title}</span>
						</Link>
					</Button>
				))}
			</div>
		</div>
	);
}
