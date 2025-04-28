import { UserService } from "@/services/user.service";
import userStore from "@/stores/UserStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function useFetchUser() {
    const { setUser } = userStore();

	const { data: userdata } = useQuery({
		queryKey: ["user"],
		queryFn: () => UserService.getUser(),
		refetchOnWindowFocus: false,
		staleTime: Number.POSITIVE_INFINITY
	});

	useEffect(() => {
		if (userdata) setUser(userdata);
	}, [userdata, setUser]);

    return
}