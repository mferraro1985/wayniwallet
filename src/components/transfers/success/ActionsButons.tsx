import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function ActionsButons() {
	return (
		<div className="flex flex-col gap-4">
			<Button variant="outline" size="xl" className="w-full font-bold">
				Share
			</Button>
			<Button size="xl" className="w-full font-bold" asChild>
				<Link href="/">Back to Home</Link>
			</Button>
		</div>
	);
}
