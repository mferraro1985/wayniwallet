import { cn } from "@/utils/twMerge";

interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	className?: string;
}
const Item = ({ children, className = "", ...props }: ListProps) => {
	return (
		<div
			className={cn("flex items-center justify-between space-x-4", className)}
			{...props}
		>
			{children}
		</div>
	);
};

const List = ({ children, className = "", ...props }: ListProps) => {
	return (
		<div className={cn("grid gap-6", className)} {...props}>
			{children}
		</div>
	);
};

List.Item = Item;
export default List;
