import React from 'react'
import { motion } from 'framer-motion'


const Modal =({ selectedImg, setSelectedImg })=>{

    const handleClick = (e)=>{
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null)
        }
    }

    return (
			<div>
				{/*<img src={selectedImg} alt="Enlarged modal" />*/}
					<motion.div
						className='backdrop flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50 transition delay-700 '
                        initial = {{opacity: 0}}
                        animate = {{opacity: 1}}
						onClick={handleClick}>
						<div>
							<motion.img
								src={selectedImg}
								alt='Enlarged modal'
								className='object-cover w-128 h-128 rounded border-2 border-white'
                                initial={{y: "-100vh"}}
                                animate={{y: 0}}
							/>
						</div>
					</motion.div>
				{/*---------------------------------------------------------------------------------*/}
			</div>
		);}

export default Modal;