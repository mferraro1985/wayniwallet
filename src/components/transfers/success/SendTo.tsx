import UserAvatar from "@/components/ui/UserAvatar";

export default function SendTo() {
	return (
		<div className="flex flex-col items-center gap-4">
			<p className="font-bold text-neutral-900">Send to</p>
			<UserAvatar variant="transfer" firstname="Matias" lastname="Ferraro" avatar="https://randomuser.me/api/portraits/women/18.jpg" />
		</div>
	);
}
