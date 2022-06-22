import React from 'react';
import avatar from "../../assets/images/avatar.jpg";

const Header = () => {
	return (
			<div className='p-4 bg-gray-200'>
				<img src={avatar} alt="user" className=' h-9 w-9  rounded-full block ml-auto'/>
			</div>
	);
};
export default Header;
