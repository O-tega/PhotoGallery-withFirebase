import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'

const ProgressBar = ({file, setFile}) =>{
    const {url, progress} = useStorage(file)
    
    // use useeffect to eliminate progress bar after upload is complete
    useEffect(()=>{
        if(url){
            setFile(null)
        }
    }, [url, setFile])

    return (
			<div className='w-full rounded-full h-1 mb-4'>
				<motion.div
					className='bg-blue-600 h-1 rounded-full dark:bg-primary'
                    initial={{width: 0}} animate={{'width': `${progress}%`}}></motion.div>
			</div>
		);
}

export default ProgressBar;