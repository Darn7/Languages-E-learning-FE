import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";
// import { getMyInfo, loginServices } from "../services/authServices";
// import { removeToken, setToken } from "../utils/localStorage";
// import { API_ENDPOINT } from "../utils/varibaleLocal";

export const loginUser = createAsyncThunk("user/loginUser", async (data) => {
	// const request = await loginServices(data.data);
	// const response = await request.data.response.access_token;
	// const userData = await axios.get(API_ENDPOINT + "auth/profile", {
	// 	headers: { Authorization: `Bearer ${response}` },
	// });
	// if (userData.data.role == "USER") {
	// 	setToken(response);
	// 	return userData.data;
	// } else {
	// 	Notiflix.Notify.failure("Tài khoản không tồn tại");
	// }
});
