import React from "react";
import Header from "../header";
import Main from "../main";
import Slider from "../slider";
import HomePageContent from "../slider/slider-content";
import { homepageSliderContentData } from "../../fixtures";
import url from "../../assets/images/home.png";

const App = () => {
	return (
		<>
			<Header />

			<Main backgroundUrl={url} height={"670px"} shadow>
				<Slider>
					{homepageSliderContentData.map(({ id, text, title }, index) => (
						<HomePageContent key={id} text={text} title={title} index={index} />
					))}
				</Slider>
			</Main>
		</>
	);
};

export default App;
