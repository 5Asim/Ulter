import axios from "axios";
import {host } from "./apiroutes";

export const api = axios.create({
	baseURL: `${host}/api`,
	headers: {
		"Content-type": "application/json",
	},
});

export const SensorData = async () => {
	try{
		const response = await api.get("/data/");
		return response.data;
		
	} catch (error) {
		console.error('Error fetching data: ', error);
		return null;
	}
		
}

export const getMediaContent = async () => {
	try {
		const response = await api.get("/media-content/", {
			headers: {
				"Content-type": "multipart/form-data"
			}
		});
		return response.data;
	} catch (error) {
		console.error('Error fetching media content: ', error);
		return null;
	}
};

export const uploadMediaContent = async (formData: FormData) => {
	try {
		const response = await api.post("/media-content/", formData, {
			headers: {
				"Content-type": "multipart/form-data"
			}
		});
		return response.data;
	} catch (error) {
		console.error('Error uploading media content: ', error);
		return null;
	}
};

      
