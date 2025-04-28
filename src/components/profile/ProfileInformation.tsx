"use client";
import userStore from "@/stores/UserStore";
import ItemProfile from "./ItemProfile";
import { Skeleton } from "../ui/Skeleton";

export default function ProfileInformation() {
	const { user, isLoading } = userStore();
	if (isLoading) {
		return (
			<div className="flex flex-col gap-3 grow">
				{[1,2,3].map((index) => (
					<div key={`skeleton-${index}`} className="flex justify-between gap-2">
						<Skeleton className="w-1/2 h-4" />
						<Skeleton className="w-1/2 h-4" />
					</div>
				))}
			</div>
		);
	}
	return (
		<div className="flex flex-col gap-3 grow">
			<ItemProfile label="City" value={user.city} />
			<ItemProfile label="State" value={user.state} />
			<ItemProfile label="Street" value={user.street} />
			<ItemProfile label="Email" value={user.email} />
			<ItemProfile label="Phone" value={user.phone} />
			<ItemProfile
				label="ID"
				value={user.id}
				className="mt-auto"
				variant={"secondary"}
			/>
		</div>
	);
}
