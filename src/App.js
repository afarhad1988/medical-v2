import React, {useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import {useLocation, useNavigate} from "react-router-dom";
import Tasks from "./pages/Tasks";
import Projects from "./pages/Projects";
import Calendar from "./pages/Calendar";
import Capabilities from "./pages/Capabilities";
import Login from "./pages/Login";


const App = () => {
	let location = useLocation();
	let navigate = useNavigate();
	useEffect(()=>{
		if(location.pathname === '/'){
			navigate('/login')

		}
	},[location.pathname, navigate])
	return (

   					<Routes>
   							<Route path='/login' element={<Login/>}/>
   							<Route path='/tasks' element={<Tasks/>}/>
   							<Route path='/projects' element={<Projects/>}/>
   							<Route path='/calendar' element={<Calendar/>}/>
   							<Route path='/capabilities' element={<Capabilities/>}/>
   						</Routes>
	);
};
export default App;
