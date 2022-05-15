import {AxiosResponse} from "axios";
import {useCallback, useEffect, useState} from "react";

export const useAxios = <T>(axiosFunction: (params?: {[key: string]: any}) => Promise<AxiosResponse<T>>, params?: {[key: string]: any}) => {
	const [data, setData] = useState<T | []>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleRequest =  useCallback (async () => {
		setIsLoading(true);
		try {
			const {data: response} = await axiosFunction(params);
			setData(response);
			setIsLoading(false);
			if (isError) setIsError(false);
		} catch (e) {
			setIsLoading(false)
			setIsError(true);
		}
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		handleRequest();
		// eslint-disable-next-line
	}, [])

	return {data, isLoading, isError}
}
