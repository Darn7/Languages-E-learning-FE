import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<div className='flex flex-col'>
			<NavLink
				end
				to='/courses'
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}>
				Courses
			</NavLink>
			<NavLink
				to='/students'
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}>
				Students
			</NavLink>
			<NavLink
				to='/dashboard'
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}>
				Dashboard
			</NavLink>
		</div>
	);
}

export default Navbar;
