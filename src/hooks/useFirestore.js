import React, {useState, useEffect} from 'react';
import {projectFireStore} from '../firebase/config'


const useFirestore =(collection)=>{

    const [loading, setLoading] = useState(false)
    const [docs, setDocs] = useState([]);

    // get data for everyupdate using useeffect
    useEffect(()=>{
        const unsub = async()=>{
            setLoading(true)
           await projectFireStore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap)=>{
                let document = []
                snap.forEach(doc =>{
                    document.push({...doc.data(), id: doc.id})
                });
                setDocs(document)
            });

            setLoading(false);
        } 


        // A cleanup function to unsubcribe from the collection when the image grid component os unmounted
        return ()=> unsub(); 

    },[collection] )
    
    return {docs, loading}
}

export default useFirestore;