import type { TransactionType, TransferTransaction } from "@/types/transaction";
import { apiCall } from "./api/apiCall";
import { mockData } from "./mock/mockdata";

export const TransactionService = {
	async getAllTransaction(): Promise<TransactionType[]> {
		try {
			const transactionsStorageded = await apiCall.get<TransactionType[]>("transactions");
			if (transactionsStorageded) return transactionsStorageded;
			const mock = await mockData.getAllTransaction();
			apiCall.post("transactions", mock);
			return mock;
		} catch (error) {
			console.error("Error fetching transactions data:", error);
			throw new Error("Failed to load transactions data");
		}
	},
	async getAllTransfers(): Promise<TransferTransaction[]> {
		try {
			return mockData.getAllTransfer()
		} catch (error) {
			console.error("Error fetching transactions data:", error);
			throw new Error("Failed to load transactions data");
		}
	},
	
};