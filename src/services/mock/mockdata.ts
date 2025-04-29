import type { RandomUser, RandomUserApiResponse } from "@/types/api";
import type { ContactProfile, User } from "@/types/commons";
import {
	TransactionIcon,
	type CashInTransaction,
	type ServicePaymentTransaction,
	type TransactionType,
	type TransferTransaction,
} from "@/types/transaction";
import { ContactService } from "../contact.service";
import { TransactionService } from "../transaction.service";

class MockData {
	private loadingContact = false;
	private static instance: MockData;
	private constructor() {}
	
	public static getInstance(): MockData {
		if (!MockData.instance) {
			MockData.instance = new MockData();
		}
		return MockData.instance;
	}

	public async getUserData(): Promise<User> {
		try {
			const response = await fetch(
				"https://randomuser.me/api/?seed=wayni_user",
			);
			const data: RandomUserApiResponse = await response.json();
			return this.formatUser(data.results[0]);
		} catch (error) {
			console.error("Error fetching mockUser:", error);
			throw new Error("Failed to load mock user data");
		}
	}

	public formatUser(apiUser: RandomUser): User {
		return {
			id: apiUser.login.uuid,
			profile: {
				avatar: apiUser.picture.large,
				firsName: apiUser.name.first,
				lastName: apiUser.name.last,
				fullName: `${apiUser.name.first} ${apiUser.name.last}`,
				email: apiUser.email,
				state: apiUser.location.state,
				city: apiUser.location.city,
				street: `${apiUser.location.street.number} ${apiUser.location.street.name}`,
				phone: apiUser.phone,
			},
			balance: 250000,
		};
	}

	public async getAllContact(): Promise<ContactProfile[]> {
		try {

			const response = await fetch(
				"https://randomuser.me/api/?seed=wayni_contact&results=20",
			);
			const data: RandomUserApiResponse = await response.json();

			return this.formatContacts(data.results);
		} catch (error) {
			console.error("Error fetching mockUser:", error);
			throw new Error("Failed to load mock user data");
		}
	}

	public formatContacts(apiUsers: RandomUser[]): ContactProfile[] {
		return apiUsers.map((apiUser) => ({
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
		}));
	}

	public async getAllTransaction(): Promise<TransactionType[]> {
		const contacts: ContactProfile[] = await ContactService.getAllContacts();
		return [
			{
				id: crypto.randomUUID(),
				name: "Internet",
				date: new Date("04/29/2025").toISOString(),
				amount: 24000,
				serviceName: "Flow",
				serviceReference: crypto.randomUUID(),
				icon: TransactionIcon.payment
			} as ServicePaymentTransaction,
			{
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date("04/28/2025").toISOString(),
				amount: 600000,
				description: "Lorem ipsum dolor sit amet",
				targetUser: contacts[0],
				icon: TransactionIcon.transfer
			} as TransferTransaction,
			{
				id: crypto.randomUUID(),
				name: "CashIn",
				date: new Date("04/27/2025").toISOString(),
				amount: 5983,
				paymentMethod: "Credit",
				icon: TransactionIcon.cashIn
			} as CashInTransaction,
			{
				id: crypto.randomUUID(),
				name: "Insurance",
				date: new Date("04/29/2025").toISOString(),
				amount: 24000,
				serviceName: "La Caja",
				serviceReference: crypto.randomUUID(),
				icon: TransactionIcon.payment
			} as ServicePaymentTransaction,
			{
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date("04/27/2025").toISOString(),
				amount: 5983,
				description: "Lorem ipsum dolor sit amet",
				targetUser: contacts[1],
				icon: TransactionIcon.transfer
			} as TransferTransaction,
			{
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date("04/26/2025").toISOString(),
				amount: 35282,
				description: "Lorem ipsum dolor sit amet",
				targetUser: contacts[2],
				icon: TransactionIcon.transfer
			} as TransferTransaction,
			{
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date("04/25/2025").toISOString(),
				amount: 474567,
				description: "Lorem ipsum dolor sit amet",
				targetUser: contacts[3],
				icon: TransactionIcon.transfer
			} as TransferTransaction,
			{
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date("04/24/2025").toISOString(),
				amount: 45678,
				description: "Lorem ipsum dolor sit amet",
				targetUser: contacts[4],
				icon: TransactionIcon.transfer
			} as TransferTransaction,
			{
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date("04/23/2025").toISOString(),
				amount: 15789,
				description: "Lorem ipsum dolor sit amet",
				targetUser: contacts[5],
				icon: TransactionIcon.transfer
			} as TransferTransaction,
			{
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date("04/22/2025").toISOString(),
				amount: 99125,
				description: "Lorem ipsum dolor sit amet",
				targetUser: contacts[6],
				icon: TransactionIcon.transfer
			} as TransferTransaction,
			{
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date("04/21/2025").toISOString(),
				amount: 33987,
				description: "Lorem ipsum dolor sit amet",
				targetUser: contacts[7],
				icon: TransactionIcon.transfer
			} as TransferTransaction,
			{
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date("04/20/2025").toISOString(),
				amount: 58422,
				description: "Lorem ipsum dolor sit amet",
				targetUser: contacts[8],
				icon: TransactionIcon.transfer
			} as TransferTransaction,
			{
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date("04/19/2025").toISOString(),
				amount: 1600,
				description: "Lorem ipsum dolor sit amet",
				targetUser: contacts[9],
				icon: TransactionIcon.transfer
			} as TransferTransaction,
			{
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date("04/18/2025").toISOString(),
				amount: 15000,
				description: "Lorem ipsum dolor sit amet",
				targetUser: contacts[10],
				icon: TransactionIcon.transfer
			} as TransferTransaction,
			{
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date("04/17/2025").toISOString(),
				amount: 1000,
				description: "Lorem ipsum dolor sit amet",
				targetUser: contacts[11],
				icon: TransactionIcon.transfer
			} as TransferTransaction,
			{
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date("04/16/2025").toISOString(),
				amount: 730,
				description: "Lorem ipsum dolor sit amet",
				targetUser: contacts[12],
				icon: TransactionIcon.transfer
			} as TransferTransaction,
			{
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date("04/15/2025").toISOString(),
				amount: 2900,
				description: "Lorem ipsum dolor sit amet",
				targetUser: contacts[13],
				icon: TransactionIcon.transfer
			} as TransferTransaction,
			{
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date("04/14/2025").toISOString(),
				amount: 33,
				description: "Lorem ipsum dolor sit amet",
				targetUser: contacts[14],
				icon: TransactionIcon.transfer
			} as TransferTransaction,
			{
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date("03/29/2025").toISOString(),
				amount: 50,
				description: "Lorem ipsum dolor sit amet",
				targetUser: contacts[15],
				icon: TransactionIcon.transfer
			} as TransferTransaction,
			{
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date("03/15/2025").toISOString(),
				amount: 12000,
				description: "Lorem ipsum dolor sit amet",
				targetUser: contacts[16],
				icon: TransactionIcon.transfer
			} as TransferTransaction,
			{
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date("01/29/2025").toISOString(),
				amount: 60,
				description: "Lorem ipsum dolor sit amet",
				targetUser: contacts[17],
				icon: TransactionIcon.transfer
			} as TransferTransaction,
			{
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date("01/26/2025").toISOString(),
				amount: 600,
				description: "Lorem ipsum dolor sit amet",
				targetUser: contacts[18],
				icon: TransactionIcon.transfer
			} as TransferTransaction,
			{
				id: crypto.randomUUID(),
				name: "Transfer",
				date: new Date("01/25/2025").toISOString(),
				amount: 10000,
				description: "Lorem ipsum dolor sit amet",
				targetUser: contacts[19],
				icon: TransactionIcon.transfer
			} as TransferTransaction,
		];
	}
	public isTransferTransaction(
		transaction: TransactionType,
	): transaction is TransferTransaction {
		return "targetUser" in transaction;
	}
	public async getAllTransfer(): Promise<TransferTransaction[]> {
		const transactions = await TransactionService.getAllTransaction();
		return transactions.filter(
			this.isTransferTransaction,
		) as TransferTransaction[];
	}
}

export const mockData = MockData.getInstance();
