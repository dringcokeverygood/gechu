import Axios, { AxiosRequestConfig } from 'axios';

const axios = Axios.create();
axios.defaults.baseURL = 'https://j9d203.p.ssafy.io/api/';
axios.defaults.withCredentials = true;

export const http = {
	get: async function get<Response = unknown>(
		url: string,
		params?: object,
		header?: AxiosRequestConfig['headers'],
	) {
		const options: AxiosRequestConfig = {
			headers: header,
			params: params,
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

	put: async function put<Response = unknown, Request = unknown>(
		url: string,
		body?: Request,
		header?: AxiosRequestConfig['headers'],
	) {
		const options: AxiosRequestConfig = {
			headers: header,
		};

		const res = await axios.put<Response>(url, body, options);
		return res.data;
	},

	delete: async function del<Response = unknown>(
		url: string,
		params?: object,
		header?: AxiosRequestConfig['headers'],
	) {
		const options: AxiosRequestConfig = {
			headers: header,
			params: params,
		};

		const res = await axios.delete<Response>(url, options);
		return res.data;
	},
};
