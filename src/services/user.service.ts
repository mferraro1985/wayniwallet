import type { User } from "@/types/commons";
import type { RandomUserApiResponse, RandomUser } from "@/types/api";

export const UserService = {
	async getUser(): Promise<User> {
		try {
			const response = await fetch(
				"https://randomuser.me/api/?seed=wayni_user",
			);
			const data: RandomUserApiResponse = await response.json();
			return this.formatUser(data.results[0]);
		} catch (error) {
			console.error("Error fetching user:", error);
			throw new Error("Failed to load user data");
		}
	},

	formatUser(apiUser: RandomUser): User {
		return {
			id: apiUser.login.uuid,
			avatar: apiUser.picture.large,
			firsName: apiUser.name.first,
			lastName: apiUser.name.last,
			fullName: `${apiUser.name.first} ${apiUser.name.last}`,
			email: apiUser.email,
			state: apiUser.location.state,
			city: apiUser.location.city,
			street: `${apiUser.location.street.number} ${apiUser.location.street.name}`,
			phone: apiUser.phone,
		};
	},
};
