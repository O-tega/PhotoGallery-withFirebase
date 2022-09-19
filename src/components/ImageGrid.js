import React from 'react';
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'


const ImageGrid = ({setSelectedImg, selectedImg}) =>{

    const { docs } = useFirestore('images');

    const Ddocs = docs.map(({url, id})=>(
            <motion.div key={id}
            onClick = {()=>{setSelectedImg(url)} }
            layout
            className='opacity-80 hover:opacity-100'
            >
                <motion.img src={url} alt="" className='rounded object-cover w-72 h-72 ' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1}}/>
            </motion.div>
        ))

    return (
        <div>
        <div className=' flex justify-center py-12'>
                <div className='grid grid-cols-3 gap-2'>
                    {docs && Ddocs}
                </div>
            </div>

        </div>
		);
}


export default ImageGrid;