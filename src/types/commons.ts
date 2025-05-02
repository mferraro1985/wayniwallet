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

export interface UserProfile {
	avatar: string;
	firstName: string;
	lastName: string;
	fullName: string;
	email: string;
	state: string;
	city: string;
	street: string;
	phone: string;
}

export interface ContactProfile extends UserProfile {
	id: string;
}
export interface User {
	id: string;
	balance: number;
	profile: UserProfile;
}
