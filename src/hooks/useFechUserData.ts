import { UserService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export default function useFetchUserData() {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["user"],
		queryFn: () => UserService.getUser(),
		refetchOnWindowFocus: false,
		// biome-ignore lint/style/useNumberNamespace: <explanation>
		staleTime: Infinity,
	});

	return { data, isLoading, isError };
}
