export interface RandomUserApiResponse {
	results: RandomUser[];
	info: {
		seed: string;
		results: number;
		page: number;
		version: string;
	};
}

export interface RandomUser {
	login: {
		uuid: string;
		username: string;
		password: string;
		salt: string;
		md5: string;
		sha1: string;
		sha256: string;
	};
	name: {
		title: string;
		first: string;
		last: string;
	};
	email: string;
	phone: string;
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	};
	location: {
		street: {
			number: number;
			name: string;
		};
		city: string;
		state: string;
		country: string;
		postcode: string;
		coordinates: {
			latitude: string;
			longitude: string;
		};
		timezone: {
			offset: string;
			description: string;
		};
	};
	registered: {
		date: string;
		age: number;
	};
	gender: string;
} 