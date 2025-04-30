type HttpMethod = "GET" | "POST" | "PUT";

interface ApiRequest {
	endpoint: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	data?: any;
	params?: Record<string, string>;
}

class LocalStorageApi {
	private static instance: LocalStorageApi;
	private baseKey = "wayniwallet_";

	private constructor() {}

	public static getInstance(): LocalStorageApi {
		if (!LocalStorageApi.instance) {
			LocalStorageApi.instance = new LocalStorageApi();
		}
		return LocalStorageApi.instance;
	}

	private async request<T>(
		method: HttpMethod,
		{ endpoint, data, params }: ApiRequest,
	): Promise<T> {
		// Simular delay de red
		await new Promise((resolve) => setTimeout(resolve, 150));

		const key = `${this.baseKey}${endpoint}`;

		try {
			switch (method) {
				case "GET":
					return this.getItem<T>(key);
				case "POST":
					return this.saveItem<T>(key, data, params);
				case "PUT":
					return this.putItem<T>(key, data);
				default:
					throw new Error(`Unsupported method: ${method}`);
			}
		} catch (error) {
			console.error(`API Error (${method} ${endpoint}):`, error);
			throw error;
		}
	}

	private getItem<T>(key: string): T {
		const item = localStorage.getItem(key);
		if (!item) {
			// @ts-ignore - Simular respuesta vacía para arrays
			//return key.endsWith("s") ? [] : null;
			return null;
		}
		return JSON.parse(item) as T;
	}

	private saveItem<T>(
		key: string,
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		data: any,
		params?: Record<string, string>,
	): T {
		const isArrayOperation =
			params?.action === "PUSH" || params?.action === "UNSHIFT";
		if (isArrayOperation) {
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			const collection = this.getItem<any[]>(key) || [];
			const newItem = { id: crypto.randomUUID(), ...data };

			if (params?.action === "PUSH") {
				collection.push(newItem);
			} else {
				collection.unshift(newItem);
			}

			localStorage.setItem(key, JSON.stringify(collection));
			return newItem as T;
		}

		localStorage.setItem(key, JSON.stringify(data));
		return data as T;
	}

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	private putItem<T>(key: string, data: any): T {
		const item = localStorage.getItem(key);
		if (item) {
			const parsedItem = JSON.parse(item);
			const newItem = { ...parsedItem, ...data };
			localStorage.setItem(key, JSON.stringify(newItem));
			return newItem as T;
		}
		return data as T;
	}

	public get<T>(endpoint: string): Promise<T> {
		return this.request<T>("GET", { endpoint });
	}

	public post<T>(
		endpoint: string,
		data: unknown,
		params?: Record<string, string>,
	): Promise<T> {
		return this.request<T>("POST", { endpoint, data, params });
	}
	public put<T>(endpoint: string, data: unknown): Promise<T> {
		return this.request<T>("PUT", { endpoint, data });
	}
}

export const apiCall = LocalStorageApi.getInstance();
