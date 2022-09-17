import {React, useState, useEffect} from 'react';
import {projectFireStore} from '../firebase/config'


const useFirestore =(collection)=>{

    const [docs, setDocs] = useState([]);

    // get data for everyupdate using useeffect
    useEffect(()=>{
        const unsub = projectFireStore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap)=>{
            let document = []
            snap.forEach(doc =>{
                document.push({...doc.data(), id: doc.id})
            });
            setDocs(document)
        });

        // A cleanup function to unsubcribe from the collection when the image grid component os unmounted
        return ()=> unsub();

    },[collection])
    
    return {docs}
}

export default useFirestore;