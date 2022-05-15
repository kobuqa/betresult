import {AxiosResponse} from "axios";
import {useEffect, useState} from "react";

export const useAxios = <T>(axiosFunction: () => Promise<AxiosResponse<T>>) => {
	const [data, setData] = useState<T | []>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleRequest = async () => {
		setIsLoading(true);
		try {
			const {data: response} = await axiosFunction();
			setData(response);
			setIsLoading(false);
			if (isError) setIsError(false);
		} catch (e) {
			setIsLoading(false)
			setIsError(true);
		}
	}
	useEffect(() => {
		handleRequest();
	}, [handleRequest])

	return {data, isLoading, isError}
}
