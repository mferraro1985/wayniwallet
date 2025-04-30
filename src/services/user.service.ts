import type { User } from "@/types/commons";
import { mockData } from "./mock/mockdata";
import { apiCall } from "./api/apiCall";

export const UserService = {
	async getUser(): Promise<User> {
		try {
			const userStorageded = await apiCall.get<User>("user");
			if (userStorageded) return userStorageded;
			const mock = await mockData.getUserData();
			apiCall.post("user", mock);
			return mock;
		} catch (error) {
			console.error("Error fetching user:", error);
			throw new Error("Failed to load user data");
		}
	},
	async updateBalance(amount: number): Promise<User> {
		try {
			const user = await apiCall.get<User>("user");
			if (!user) throw new Error("User not found");
			return apiCall.put("user", { balance: user.balance + amount });
		} catch (error) {
			console.error("Error updating user:", error);
			throw new Error("Failed to update user data");
		}
	}
};
