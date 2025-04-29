import { create } from "zustand";

interface Filter {
	fromDate: string;
	toDate: string;
}
interface TransferState {
	filter: Filter;
	setFilter: (filter: Filter) => void;
}
export const transferStore = create<TransferState>()((set) => ({
	filter: {} as Filter,
	setFilter: (filter: Filter) => set({ filter })
}));

export default transferStore;
