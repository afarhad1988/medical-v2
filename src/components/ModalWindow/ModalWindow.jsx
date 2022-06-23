import React from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";

const ModalWindow = ({ setProjects, projects, setOpenModal }) => {
	const formik = useFormik({
		initialValues: {
			img: "",
			title: "",
			from: "",
			to: "",
			name: "",
			company: "",
		},
		validationSchema: Yup.object({
			img: Yup.string()
					.max(11130, "Must be URL ")
					.required("Введите данные URL"),
			title: Yup.string()
					.max(20, "Must be 20 characters or less")
					.required("Введите данные"),
			from: Yup.string()
					.max(20, "Must be 20 characters or less")
					.required("Введите данные"),
			to: Yup.string()
					.max(20, "Must be 20 characters or less")
					.required("Введите данные"),
			name: Yup.string()
					.max(20, "Must be 20 characters or less")
					.required("Введите данные"),
			company: Yup.string()
					.max(20, "Must be 20 characters or less")
					.required("Введите данные"),
		}),
		onSubmit: async (values) => {
			const uploadProject = await axios.post(
					"https://62ad5cd3645d00a28af889b6.mockapi.io/projects",
					values
			);
			setProjects([...projects, uploadProject.data]);
			toast.success("Add new card");
			setOpenModal(false);
		},
	});

	return (
			<div className="fixed top-0 right-0 left-0 bottom-0 m-0-auto overflow-x-scroll justify-center flex w-full bg-white p-6 ">
				<div
						className="absolute right-1/3 top-14 cursor-pointer text-pink-500 "
						onClick={() => {
							setOpenModal(false);
						}}
				>
					<i className='bx bx-x-circle'/>
				</div>
				<form onSubmit={formik.handleSubmit} className="mb-10 mt-10 ">
					<div className="flex items-center container ml-auto">
						<div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-auto">
							<div className="flex justify-center py-4">
								<div className="h-11 w-11 overflow-hidden rounded-full">
									<img
											src="https://w7.pngwing.com/pngs/981/736/png-transparent-logo-clinic-family-medicine-physician-family-walk-text-trademark-logo.png"
											width={100}
											alt=""
									/>
								</div>
							</div>
							<div className="flex justify-center">
								<div className="flex">
									<h1 className="text-gray-600 font-bold md:text-2xl text-xl">
										Добавить проект
									</h1>
								</div>
							</div>
							<div className="grid grid-cols-1 mt-5 mx-7">
								<label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
									Добавить изображение
								</label>
								<input
										className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
										type="text"
										placeholder="изображение"
										name="img"
										id="img"
										onChange={formik.handleChange}
										value={formik.values.img}
								/>
								{formik.errors.img ? (
										<div className="text-red-500">{formik.errors.img}</div>
								) : null}
							</div>
							<div className="grid grid-cols-1 mt-5 mx-7">
								<label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
									Добавить заголовок
								</label>
								<input
										className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
										type="text"
										placeholder="заголовок"
										name="title"
										id="title"
										onChange={formik.handleChange}
										value={formik.values.title}
								/>
								{formik.errors.title ? (
										<div className="text-red-500">{formik.errors.title}</div>
								) : null}
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
								<div className="grid grid-cols-1">
									<label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
										Добавить начало проекта
									</label>
									<input
											className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
											type="date"
											placeholder="дата"
											name="from"
											max="to"
											id="date"
											onChange={formik.handleChange}
											value={formik.values.from}
									/>
									{formik.errors.from ? (
											<div className="text-red-500">{formik.errors.from}</div>
									) : null}
								</div>
								<div className="grid grid-cols-1">
									<label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
										Добавить конец проекта
									</label>
									<input
											className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
											type="date"
											placeholder="дата"
											name="to"
											min="from"
											id="date"
											onChange={formik.handleChange}
											value={formik.values.to}
									/>
									{formik.errors.to ? (
											<div className="text-red-500">{formik.errors.to}</div>
									) : null}
								</div>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
								<div className="grid grid-cols-1">
									<label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
										Добавить менеджера
									</label>
									<input
											className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
											type="text"
											placeholder="менеджер"
											id="name"
											name="name"
											onChange={formik.handleChange}
											value={formik.values.name}
									/>
									{formik.errors.name ? (
											<div className="text-red-500">{formik.errors.name}</div>
									) : null}
								</div>
								<div className="grid grid-cols-1">
									<label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
										Добавить компанию
									</label>
									<input
											className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
											type="text"
											placeholder="компания"
											name="company"
											id="company"
											onChange={formik.handleChange}
											value={formik.values.company}
									/>
									{formik.errors.company ? (
											<div className="text-red-500">{formik.errors.company}</div>
									) : null}
								</div>
							</div>
							<div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
								<button className=" rounded-xl w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">
									Добавить
								</button>
							</div>
						</div>
					</div>
				</form>
				<ToastContainer />
			</div>
	);
};
export default ModalWindow;
