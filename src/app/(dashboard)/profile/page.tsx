"use client"
import ProfileInformation from "@/components/profile/ProfileInformation";
import Card from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import UserAvatar from "@/components/ui/UserAvatar";
import useFetchUser from "@/hooks/useFechUser";

export default function ProfilePage() {
	useFetchUser()
	return (
		<>
			<PageHeader title="Profile" />
			<Card className="grow-1 gap-8">
				<UserAvatar size={"big"}/>
				<ProfileInformation />				
			</Card>
		</>
	);
}
