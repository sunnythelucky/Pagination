import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID uHDS2IQnf98eQC0_1mIVY_OqlXoxBuOPNm-aY4-cMxw",
	},
});
