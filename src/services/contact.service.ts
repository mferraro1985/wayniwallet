import type { ContactProfile } from "@/types/commons";
import { apiCall } from "./api/apiCall";
import { mockData } from "./mock/mockdata";

export const ContactService = {
	async getAllContacts(): Promise<ContactProfile[]> {
		try {
			const contactsStorageded = await apiCall.get<ContactProfile[]>("contacts");
			if (contactsStorageded) return contactsStorageded;
			const mock = await mockData.getAllContact();
			apiCall.post("contacts", mock);
			return mock;
		} catch (error) {
			console.error("Error fetching contact data:", error);
			throw new Error("Failed to load contact data");
		}
	},
	
};
