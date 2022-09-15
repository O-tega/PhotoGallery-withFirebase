import React, { useState } from "react";

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
			<input type='file' onChange={changeHandler} />
			<div>
				{error && <div className="text-xs text-red-500 py-2">{error}</div>}
				{file && <div className="text-xs text-blue-700 py-2">{file.name}</div>}
			</div>

		</div>
	);
};

export default UploadForm;
