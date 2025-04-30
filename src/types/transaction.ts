import type { ContactProfile } from "./commons";

export enum TransactionIcon {
	cashIn = "wallet",
	payment = "arrow-down",
	transfer = "transfer",
}
interface Transaction {
	id: string;
	name: string;
	date: string;
	amount: number;
	icon: TransactionIcon;
}

export interface TransferTransaction extends Transaction {
	description: string;
	targetUser: ContactProfile;
}

export interface CashInTransaction extends Transaction {
	paymentMethod: "Transfer" | "Credit" | "Debit";
}

export interface ServicePaymentTransaction extends Transaction {
	serviceName: string;
	serviceReference: string;
}

export type TransactionType =
	| TransferTransaction
	| CashInTransaction
	| ServicePaymentTransaction;

export interface TransferRequest {
	amount: number;
	targetUser: string;
	comment: string;
}
