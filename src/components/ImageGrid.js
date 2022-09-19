import React, { useState } from 'react';
import Modal from './Modal'
import useFirestore from '../hooks/useFirestore'


const ImageGrid = ({setSelectedImg, selectedImg}) =>{

    const[showModal, setShowModal] = useState(false)


    const { docs } = useFirestore('images');

    const Ddocs = docs.map(({url, id})=>(
            <div key={id}
            onClick = {()=>{setShowModal(true);
            setSelectedImg(url)} }>
                <img src={url} alt="" className='rounded object-cover w-72 h-72'/>
            </div>
        ))

    return (
        <>
        <div className=' flex justify-center py-12'>
                <div className='grid grid-cols-3 gap-2'>
                    {docs && Ddocs}
                </div>
            </div>

            <Modal selectedImg = {selectedImg} showModal = {showModal} setShowModal = {setShowModal} />
        </>
		);
}


export default ImageGrid;