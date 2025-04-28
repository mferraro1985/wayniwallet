import type { User } from "@/types/commons";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
	user: User;
	balance: number;
	isLoading: boolean;
	setUser: (user: User) => void;
	updateBalance: (amount: number) => void;
	setIsLoading: (value: boolean) => void;
}
export const userStore = create<UserState>()(
	persist(
		(set) => ({
			user: {} as User,
			balance: 10000,
			isLoading: true,
			setUser: (user: User) =>
				set({
					user: { ...user, fullName: `${user.firsName} ${user.lastName}` },
					isLoading: false,
				}),
			updateBalance: (amount) =>
				set((state) => ({
					balance: state.balance + amount,
				})),
			setIsLoading: (value: boolean) => {
				set({ isLoading: value });
			},
		}),
		{
			name: "user-storage",
			partialize: (state) => ({
				user: state.user,
				balance: state.balance,
				isLoading: state.isLoading,
			}),
		},
	),
);

export default userStore;
