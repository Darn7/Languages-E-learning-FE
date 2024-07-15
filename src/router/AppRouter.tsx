import { Routes, Route } from "react-router-dom";
import { Login, Register } from "../pages";
import HomeRouter from "./HomeRouter";
import AuthRouter from "./AuthRouter";

function AppRouter() {
	return (
		<Routes>
			<Route path='/' element={<HomeRouter />} />
			<Route path='/auth' element={<AuthRouter />} />
		</Routes>
	);
}

export default AppRouter;
