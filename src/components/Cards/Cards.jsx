import React from 'react';

const Cards = ({item}) => {
	return (
						<div
								className=" flex w-80 flex-col  shadow-xl  shadow-slate-300/60 mr-4 mb-4"
								key={item.id}
						>
							<div className='w-80 h-48'>
								<img src={item.img} alt='' className=" w-80 h-48 object-cover object-center"/>
							</div>

							<div className="p-4">
								<h1 className="text-xl font-medium text-slate-600 pb-2 uppercase">
									{item.title}
								</h1>
								<div>
                      <span>
                       <i className='bx bx-calendar text-lg text-gray-500'/>
                      </span>
									<span className="text-lg ml-2 text-gray-500">
                        {item.from.split("-").reverse().join(".") +
						" " +
						"-" +
						" " +
						item.to.split("-").reverse().join(".")}
                      </span>
								</div>
								<div>
                      <span>
                         <i className='bx bx-user text-lg text-gray-500'/>
                      </span>
									<span className="text-lg ml-2 text-gray-500">{item.name}</span>
								</div>
								<div className="mb-5">
                      <span>
                      <i className='bx bx-ruble text-lg text-gray-500'/>
                      </span>
									<span className="text-lg ml-2 text-gray-500">{item.company}</span>
								</div>
								<div className="mr-2">
									<button
											type="button"
											className="h-9 w-9 overflow-hidden rounded-full mr-2"
									>
										<img
												src="https://rugraphics.ru/wp-content/uploads/licza-lyudej.png"
												alt="user"
										/>
									</button>
									<button
											type="button"
											className="h-9 w-9 overflow-hidden rounded-full mr-2"
									>
										<img
												src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2CT-_XJ8Z6uHi-EV86Y-MfdE2F1GIGeaMg&usqp=CAU"
												alt="user"
										/>
									</button>
									<button
											type="button"
											className="h-9 w-9 overflow-hidden rounded-full mr-2"
									>
										<img
												src="https://rugraphics.ru/wp-content/uploads/licza-lyudej.png"
												alt="user"
										/>
									</button>
									<button
											type="button"
											className="h-9 w-9 overflow-hidden rounded-full mr-2"
									>
										<img
												src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2CT-_XJ8Z6uHi-EV86Y-MfdE2F1GIGeaMg&usqp=CAU"
												alt="user"
										/>
									</button>
								</div>
							</div>
						</div>


	);
};
export default Cards;
