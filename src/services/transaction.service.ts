import { TransactionIcon, type TransactionType, type TransferRequest, type TransferTransaction } from "@/types/transaction";
import { apiCall } from "./api/apiCall";
import { mockData } from "./mock/mockdata";
import { ContactService } from "./contact.service";
import { UserService } from "./user.service";

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
	async sendTransfer(data: TransferRequest): Promise<TransferTransaction> {
		try {
			const contact = await ContactService.getContactById(data.targetUser);
			if (!contact) throw new Error("Contact not found");
			const tranferData: TransferTransaction = {
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date().toISOString(),
				amount: data.amount,
				icon: TransactionIcon.transfer,
				description: data.comment,
				targetUser: contact,
			}
			await apiCall.post("transactions", tranferData, { action: "UNSHIFT" });
			await UserService.updateBalance(-data.amount);
			return tranferData
		} catch (error) {
			console.error("Error sending transactions data:", error);
			throw new Error("Failed to send transactions data");
		}
	},
	async getTransferById(id: string): Promise<TransferTransaction | null> {
		try {
			const transfers = await this.getAllTransfers();
			if (transfers) return transfers.find((transfer) => transfer.id === id) || null;
			return null;
		} catch (error) {
			console.error("Error fetching transfer data by id:", error);
			throw new Error("Failed to load transfer data by id");
		}
	}
};