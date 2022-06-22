import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const Layout = ({children}) => {
	return (
			<div className='flex min-h-screen '>
				<div className='columns-xs bg-purple-900'>
					<Sidebar/>
				</div>
				<div className='w-full'>
					<Header/>
					<div className='p-4'>
						{children}
					</div>
				</div>
			</div>
	);
};
export default Layout;
