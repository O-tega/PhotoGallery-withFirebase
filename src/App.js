import React from "react";
import Index from "./components/Index";
import UploadForm from "./components/UploadForm";

const App = () => {
	return (
		<div className="flex justify-center">
			<div className='w-3/4 h-screen'>
				<Index />
				<UploadForm />
			</div>
		</div>
	);
};

export default App;
