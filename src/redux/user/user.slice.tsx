// import { removeToken, setToken } from "../utils/localStorage";
import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./user.thunk";
const initialState = {
	loading: false,
	user: null,
	error: null,
	rememberLogin: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		logout: (state, action) => {
			state.loading = false;
			state.user = null;
			state.error = null;
			// removeToken();
			console.log("đăng xuất");
		},
		setUserInfo: (state, action) => {
			state.user = action.payload;
		},
		setRememberLogin: (state, action) => {
			state.rememberLogin = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.loading = true;
				state.user = null;
				state.error = null;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
				state.error = null;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.loading = false;
				state.user = null;
				state.error = action.error.message;
			});
	},
});

export const userSelector = (state) => state.user.user;
export const rememberLogin = (state) => state.user.rememberLogin;

export const { logout, setUserInfo, setRememberLogin } = userSlice.actions;
export default userSlice.reducer;
