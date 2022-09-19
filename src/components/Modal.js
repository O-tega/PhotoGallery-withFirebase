import React from 'react'


const Modal =({ selectedImg, setSelectedImg })=>{

    const handleClick = (e)=>{
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null)
        }
    }

    return (
			<div>
				{/*<img src={selectedImg} alt="Enlarged modal" />*/}
					<div
						className='backdrop flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50 transition delay-700 '
						onClick={handleClick}>
						<div>
							<img
								src={selectedImg}
								alt='Enlarged modal'
								className='object-cover w-128 h-128 rounded border-2 border-white'
							/>
						</div>
					</div>
				{/*---------------------------------------------------------------------------------*/}
			</div>
		);}

export default Modal;