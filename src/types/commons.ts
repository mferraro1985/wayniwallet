export enum TransactionTypes {
	CashIn = "cashIn",
	Payment = "payment",
	Transfer = "transfer",
}

export interface Transaction {
	id: string;
	description: string;
	date: string;
	amount: string;
	type: TransactionTypes;
}

export interface User {
	id: string;
	avatar: string;
	firsName: string;
	lastName: string;
	fullName: string;
	email: string;
	state: string;
	city: string;
	street: string;
	phone: string;
}
