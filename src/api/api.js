import * as axios from "axios";

const instance = axios.create({
	baseURL: './questions.json',
});

export const fetchQuestionsAPI = () => {
		return instance.get()
			.then(response => Object.values(response.data))

};
