import React, { useEffect, useState } from 'react';
import useFirestore from '../hooks/useFirestore'
import CircularProgress from "@mui/material/CircularProgress";
import { motion } from 'framer-motion'


const ImageGrid = ({setSelectedImg, selectedImg}) =>{
    const { docs, loading} = useFirestore('images');
    const [isLoading, setIsLoading] = useState(false)


    console.log(isLoading)

    useEffect(()=>{
        setIsLoading(true);
        const time = setTimeout(()=>{
            setIsLoading(false)
        }, 3000)
    }, [])

    const Ddocs = docs.map(({url, id})=>(
            <motion.div key={id}
            onClick = {()=>{setSelectedImg(url)} }
            layout
            className='opacity-80 hover:opacity-100 transition delay-50'
            >
                <motion.img src={url} alt="" className='rounded object-cover w-72 h-72 ' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1}}/>
            </motion.div>
        ))


    return(
        <div>
        {isLoading? 
            <div className='flex justify-center mt-48'><CircularProgress/></div>
            :
        <div className=' flex justify-center py-12'>  
            <div className='grid grid-cols-3 gap-2'>
                {docs && Ddocs}
            </div>
        </div>}

        </div>
		);
}


export default ImageGrid;