import ItemProfile from "./ItemProfile";
import { Skeleton } from "../ui/Skeleton";
import type { User } from "@/types/commons";

interface ProfileInformationProps {
    userdata?: User
    loading: boolean
}

export default function ProfileInformation({userdata, loading}: ProfileInformationProps) {
	if (loading) {
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
	return userdata && (
		<div className="flex flex-col gap-3 grow">
			<ItemProfile label="City" value={userdata.profile.city} />
			<ItemProfile label="State" value={userdata.profile.state} />
			<ItemProfile label="Street" value={userdata.profile.street} />
			<ItemProfile label="Email" value={userdata.profile.email} />
			<ItemProfile label="Phone" value={userdata.profile.phone} />
			<ItemProfile
				label="ID"
				value={userdata.id}
				className="mt-auto"
				variant={"secondary"}
			/>
		</div>
	);
}
