import React from 'react';
import logo from "../../assets/images/logo.png";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
	return (
			<aside className='py-4'>
				<img src={logo} alt="" className='h-24 mb-8 block m-auto'/>
				<nav className='navbar'>
					<NavLink to="/tasks" className='block pl-2 text-white py-2'><i className='bx bx-qr mr-2'/>Задачи
						и работы</NavLink>
					<NavLink to="/projects" className='block pl-2 text-white py-2'><i className='bx bx-qr  mr-2'/>Проекты</NavLink>
					<NavLink to="/calendar" className='block pl-2 text-white py-2'><i
							className='bx bx-qr mr-2'/>Календарь</NavLink>
					<NavLink to="capabilities" className='block pl-2 text-white py-2'><i className='bx bx-qr mr-2'/>Возможности</NavLink>
				</nav>
			</aside>
	);
};
export default Sidebar;
