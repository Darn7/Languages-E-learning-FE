import { Routes, Route, NavLink } from "react-router-dom";
import { Courses, Home, Students } from "../pages";
import DashBoard from "../pages/screens/DashBoard/DashBoard";

function HomeRouter() {
	return (
		<Routes>
			<Route path='/' element={<Home />}>
				<Route path='/courses' element={<Courses />} />
				<Route path='/students' element={<Students />} />
				<Route path='/dashboard' element={<DashBoard />} />
			</Route>
		</Routes>
	);
}

export default HomeRouter;
