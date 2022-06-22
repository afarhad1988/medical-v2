import React from 'react';

const Buttons = ({setOpenModal, handleFlex, handleBlock}) => {
	return (
			<div>
				<button className="btn" onClick={() => setOpenModal(true)}>
					Добавить проект
				</button>
				<div className="flex justify-end mt-5">
					<button
							onClick={() => handleFlex(0)}

					>
						{" "}
						<i className='bx bx-customize'/>
					</button>
					<button
							className="ml-4"
							onClick={() => handleBlock(1)}
					>
						{" "}
						<i className='bx bx-list-ul'/>
					</button>
				</div>
			</div>
	);
};
export default Buttons;
