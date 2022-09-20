import React, { useState } from "react";
import ProgressBar from "./progressBar";
// import addCircle from '../public/addCircle.png'


const addCircle = require('../public/addCircle.png')


const UploadForm = () => {
    // array of types
    const types = ['image/png', 'image/jpeg']


	// State to hold file
	const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

	const changeHandler = (e) => {
		const selected = e.target.files[0];

		// check if file exist
		if (selected && types.includes(selected.type)) {
			setFile(selected);
			setError('')
		}else{
            setFile(null);
            setError('please select a valid image type (png or jpg)')
        }
	};

	return (
		<div>
		{/*<div style={{backgroundImage: `url(${addCircle})`, backgroundColor: 'red' }}> 
			new
		</div>*/}
		<div className="flex justify-center rounded bg-primary">
			<input type='file' onChange={changeHandler} className='text-white'/>
		</div>
			<div>
				{error && <div className="text-xs text-red-500 py-2">{error}</div>}
				{file && <div className="mt-1"><ProgressBar file={file} setFile= {setFile}/></div>}
				{file && <div className="text-xs text-blue-700 py-2">{file.name}</div>}
			</div>

		</div>
	);
};

export default UploadForm;
