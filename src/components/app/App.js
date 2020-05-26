import React from "react";
import Header from "../header";
import Main from "../main";
import Slider from "../slider";
import HomePageContent from "../slider/slider-content";
import url from "../../assets/images/home.png";

const App = () => {
	return (
		<>
			<Header />
			<Slider
				children={<HomePageContent />}
				backgroundUrl={url}
				height={"670px"}
				Shadow
			/>
			<Main />
		</>
	);
};

export default App;
