import type { User } from "@/types/commons";
import { create } from "zustand";

interface UserState {
	user: User;
	setUser: (user: User) => void;
}
export const userStore = create<UserState>()((set) => ({
	user: {} as User,
	setUser: (user: User) => set({ user }),
}));

export default userStore;
