import React from "react";
import Header from "../header";
import Main from "../main";
import Slider from "../slider";
import HomePageContent from "../slider/slider-content";

const App = () => {
	return (
		<>
			<Header />
			<Slider children={HomePageContent} />
			<Main />
		</>
	);
};

export default App;
