import {React, useState, useEffect} from 'react';
import {projectFireStore} from '../firebase/config'


const useFirestore =(collection)=>{

    const [docs, setDocs] = useState([]);

    // get data for everyupdate using useeffect
    useEffect(()=>{
        projectFireStore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap)=>{
            let document = []
            snap.forEach(doc =>{
                document.push({...doc.data, id: doc.id})
            });
            setDocs(document)
        });

        return {docs}
    },[collection])

}