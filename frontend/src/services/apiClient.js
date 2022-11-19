import axios from "axios";

class ApiClient {
	constructor(remoteHostUrl) {
		this.remoteHostUrl = remoteHostUrl;
		this.token = null;
		this.tokenName = "token";
	}

	setToken(token) {
		this.token = token;
		localStorage.setItem(this.tokenName, token);
	}

	async request({ endpoint, method = `GET`, data = {} }) {
		const url = `${this.remoteHostUrl}/${endpoint}`;

		const headers = {
			"Content-Type": "application/json",
			Authorization: this.token ? `Bearer ${this.token}` : "",
		};

		try {
			const res = await axios({ url, method, data, headers });
			return { data: res.data, error: null };
		} catch (error) {
			console.error("APIclient.makeRequest.error:");
			console.error({ errorResponse: error.response });
			const message = error?.response?.data?.error?.message;
			return { data: null, error: message || String(error) };
		}
	}


	async fetchPosts() {
		return await this.request({
			endpoint: `posts/`,
			method: `GET`,
		});
	}

    async fetchUsers(){
        return await this.request({
            endpoint: `auth/users/`,
            method: `GET`,
        })
    }
}

const API = new ApiClient("http://localhost:3000");
//TODO: this needs to be changed when deployed
export default API;