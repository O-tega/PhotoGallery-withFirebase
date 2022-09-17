import React from 'react';
import useFirestore from '../hooks/useFirestore'
import useStorage from '../hooks/useStorage';


const ImageGrid = () =>{
    const { docs } = useFirestore('images');
    console.log(docs)

    const Ddocs = docs.map(({url, id})=>(
            <div key={id} className = "">
                <img src={url} alt="" className='rounded object-cover w-72 h-72'/>
            </div>
        ))

    return (
			<div className=' flex justify-center py-12'>
					<div className='grid grid-cols-3 gap-2'>
						{docs && Ddocs}
					</div>
				</div>
		);
}


export default ImageGrid;