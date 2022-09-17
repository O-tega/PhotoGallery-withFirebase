import React from "react";
import ImageGrid from "./components/ImageGrid";
import Index from "./components/Index";
import UploadForm from "./components/UploadForm";

const App = () => {
	return (
		<div className="flex justify-center">
			<div className='w-3/4 h-screen'>
				<Index />
				<UploadForm />
				<ImageGrid />
			</div>
		</div>
	);
};

export default App;
