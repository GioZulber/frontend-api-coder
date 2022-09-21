import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

import { User, UserLogin, UserRegister } from './User';

const API = import.meta.env.VITE_NODE_API;

export const registerUser = async (user: UserRegister) => {
	const response = await axios
		.post(`${API}/register`, user)
		.then((res) => {
			localStorage.setItem('user', res.data.token);
			return res;
		})
		.catch((err) => {
			return err.response;
		});
	return response;
};

export const loginUser = async (user: UserLogin) => {
	const response = await axios
		.post(`${API}/login`, user)
		.then((res) => {
			localStorage.setItem('user', res.data.token);
			return res;
		})
		.catch((err) => {
			return err.response;
		});

	return response;
};
