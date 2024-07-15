import { Routes, Route } from "react-router-dom";
import { Login, Register } from "../pages";

function HomeRouter() {
	return (
		<Routes>
			<Route path='/'>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Route>
		</Routes>
	);
}

export default HomeRouter;
