import React, { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import Index from "./components/Index";
import UploadForm from "./components/UploadForm";
import Modal from "./components/Modal";


const App = () => {
	// Create state for the modal
	const [selectedImg, setSelectedImg] = useState(null)

		console.log(selectedImg)

	return (
		<div className="flex justify-center">
			<div className='w-3/4 h-screen'>
				<Index />
				<UploadForm />
				<ImageGrid setSelectedImg = {setSelectedImg} selectedImg = {selectedImg}/>
				{selectedImg && <Modal setSelectedImg = {setSelectedImg} selectedImg = {selectedImg}/>}
			</div>
		</div>
	);
};

export default App;
