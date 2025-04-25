import Link from "next/link";
import Icon from "./Icon";
import { Button } from "./Button";

interface PageHeaderProps {
	title: string;
	backHref?: string;
}

export const PageHeader = ({ title, backHref = ".." }: PageHeaderProps) => {
	return (
		<div className="flex items-center pt-6 pl-5 pr-14 mb-8">
			<Button asChild variant="ghost" size="icon">
				<Link href={backHref} aria-label="Go back">
					<Icon name="arrow-left" size={28} />
				</Link>
			</Button>
			<h1 className="text-xl font-bold grow-1 text-center">{title}</h1>
		</div>
	);
};
