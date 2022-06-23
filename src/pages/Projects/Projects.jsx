import React, {useState, useEffect} from 'react';
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import Buttons from "../../components/Buttons/Buttons";
import Cards from "../../components/Cards/Cards";

const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [openModal, setOpenModal] = useState(false);
	const [flex, setFlex] = useState(true);

	useEffect(() => {
		axios
				.get("https://62ad5cd3645d00a28af889b6.mockapi.io/projects")
				.then((res) => {
					setProjects(res.data);
				});
	}, []);
	const handleFlex = (index) => {
		setFlex(true);
		console.log(111)

	};
	const handleBlock = (index) => {
		setFlex(false);
		console.log(222)

	};
	return (
			<Layout>
				{openModal && (
						<ModalWindow
								setOpenModal={setOpenModal}
								projects={projects}
								setProjects={setProjects}
						/>
				)}
				<h2 className='uppercase text-purple-800 text-2xl mb-8'>проекты</h2>
				<span className="uppercase cursor-pointer font-semibold border-b-4 border-purple-700">
              Cписок проектов
            </span>
				<span className="uppercase ml-5 cursor-pointer font-semibold text-gray-300">
              Дорожные карты
            </span>
				<hr/>
				<div className='flex justify-between mt-10'>
					<h3 className="uppercase  font-semibold text-lg text-slate-500">
						Cписок проектов
					</h3>
					<Buttons setOpenModal={setOpenModal}  handleFlex={handleFlex}
							 handleBlock={handleBlock}/>
				</div>
                  <div className={
					  flex ? "flex justify-start flex-wrap columns-auto" : "block"
				  }>
					  {
						  projects.map((item)=>(
								  <Cards projects={projects} flex={flex} item={item}/>
						  ))
					  }
					  {/*<Card flex={flex}/>*/}

				  </div>

			</Layout>
	);
};
export default Projects;
