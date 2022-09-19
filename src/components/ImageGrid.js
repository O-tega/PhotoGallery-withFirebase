import React from 'react';
import useFirestore from '../hooks/useFirestore'


const ImageGrid = ({setSelectedImg, selectedImg}) =>{

    const { docs } = useFirestore('images');

    const Ddocs = docs.map(({url, id})=>(
            <div key={id}
            onClick = {()=>{setSelectedImg(url)} }>
                <img src={url} alt="" className='rounded object-cover w-72 h-72'/>
            </div>
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