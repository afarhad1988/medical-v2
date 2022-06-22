import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";


const Login = () => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const handleChangeLogin = (e) => {
		setLogin(e.target.value);
	};
	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	function handleClick() {
		if (login === "admin" && password === "admin") {
			navigate("/projects");
		} else {
			setPassword("");
			setLogin("");
			toast.warn("Вы ввели неверные данные", {
				position: "top-center",
				autoClose: 9000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	}
	let location = useLocation();
	let navigate = useNavigate()
 useEffect(()=>{
     if(location.pathname === '/'){
		 navigate('/login')
	 }
 },[location.pathname])
	return (
			<div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
				<div className="w-full sm:max-w-md p-5 mx-auto">
					<button
							type="button"
							className="h-12 w-12 overflow-hidden rounded-full flex items-center justify-center m-0 m-auto"
					>
						<img
								className="flex  justify-center"
								src="https://w7.pngwing.com/pngs/981/736/png-transparent-logo-clinic-family-medicine-physician-family-walk-text-trademark-logo.png"
								alt="logo"
						/>
					</button>
					<h2 className="mb-12 text-center text-2xl font-extrabold">Welcome</h2>
					<form>
						<div className="mb-4">
							<label className="block mb-1" htmlFor="name">
								Логин
							</label>
							<input
									id="name"
									type="text"
									name="name"
									value={login}
									placeholder="Логин"
									className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
									onChange={handleChangeLogin}
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-1" htmlFor="password">
								Пароль
							</label>
							<input
									id="password"
									type="password"
									name="password"
									value={password}
									placeholder="Пароль"
									className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
									onChange={handleChangePassword}
							/>
						</div>
						<div className="mt-6 flex items-center justify-between">
							<div className="flex items-center">
								<input
										id="remember_me"
										type="checkbox"
										className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
								/>
								<label
										htmlFor="remember_me"
										className="ml-2 block text-sm leading-5 text-gray-900"
								>
									{" "}
									Запомнить пароль{" "}
								</label>
							</div>
						</div>
						<div className="mt-6">
							<button
									onClick={handleClick}
									className="mb-6 w-full inline-flex items-center justify-center px-4 py-2 bg-fuchsia-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-fuchsia-500 active:bg-fuchsia-400 focus:outline-none focus:bg-fuchsia-400 focus:ring focus:ring-fuchsia-200 disabled:opacity-25 transition"
							>
								Войти
							</button>
							<a href="#" className="text-sm text-fuchsia-700">
								{" "}
								Забыли пароль?{" "}
							</a>
						</div>
					</form>
				</div>
				<ToastContainer
						position="top-center"
						autoClose={9000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
				/>
			</div>
	);
};
export default Login;
