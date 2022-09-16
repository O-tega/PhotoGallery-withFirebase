import {useState, useEffect} from 'react'
import { projectStorage } from '../firebase/config'

const useStorage = (file)=>{
    const [progress, setProgress] = useState(null)
    const [url, setUrl] = useState(null);
    const [error, setError] = useState(null)

    useEffect(()=>{
        // reference storage
        const storageRef = projectStorage.ref(file.name);

        storageRef.put(file).on('state_changed', (snap)=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage)
        }, (err)=>{
            setError(err)
        }, async()=>{
            const url = await storageRef.getDownloadURL();
            setUrl(url)
        })
    },[file])

    return {progress, url, error}
}

export default useStorage;