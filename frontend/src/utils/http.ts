import Axios, { AxiosRequestConfig } from 'axios';

const axios = Axios.create();
axios.defaults.baseURL = 'https://j9d203.p.ssafy.io/api/';
axios.defaults.withCredentials = true;

export const http = {
	get: async function get<Response = unknown>(
		url: string,
		header?: AxiosRequestConfig['headers'],
	) {
		const options: AxiosRequestConfig = {
			headers: header,
		};

		const res = await axios.get<Response>(url, options);
		return res.data;
	},

	post: async function post<Response = unknown, Request = unknown>(
		url: string,
		body?: Request,
		header?: AxiosRequestConfig['headers'],
	) {
		const options: AxiosRequestConfig = {
			headers: header,
		};

		const res = await axios.post<Response>(url, body, options);
		return res.data;
	},
};
