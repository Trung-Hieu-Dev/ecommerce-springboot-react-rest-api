import axios, { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AxiosInterceptor(props: any) {
	const navigate = useNavigate();

	//fake slow loading
	const sleep = (milliseconds: number) =>
		new Promise((resolve) => setTimeout(resolve, milliseconds));

	useEffect(() => {
		const interceptor = axios.interceptors.response.use(
			async (response) => {
				await sleep(3000);
				return response;
			},
			(error: AxiosError<any>) => {
				console.log('interceptor run...');
				// displaying error message with react-toastify
				switch (error.response?.status) {
					case 400:
						if (error.response?.data.message) {
							const errors = error.response?.data.message
								.split('; ')
								.filter((message: string) => message !== '');
							throw errors;
						}
						toast.error(error.response?.data.message, { theme: 'colored' });
						break;

					case 404:
						navigate('not-found');
						break;

					default:
						toast.error(error.response?.data.message, { theme: 'light' });
						break;
				}
				return Promise.reject(error); // throw error
			}
		);

		return () => {
			axios.interceptors.response.eject(interceptor);
		};
	}, [navigate]);

	return props.children;
}
