"use client";
import ProfileInformation from "@/components/profile/ProfileInformation";
import Card from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import UserAvatar from "@/components/ui/UserAvatar";
import useFetchUserData from "@/hooks/useFechUserData";

export default function ProfilePage() {
	const { data: user, isLoading } = useFetchUserData();
	return (
		<>
			<PageHeader title="Profile" />
			<Card className="grow-1 gap-8">
				<UserAvatar loading={isLoading} fullname={user?.profile.fullName || ""} avatar={user?.profile.avatar || ""} size={"big"} />
				<ProfileInformation userdata={user} loading={isLoading} />
			</Card>
		</>
	);
}
