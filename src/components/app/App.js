import React from "react";
import Header from "../header";
import Section from "../main";
import Slider from "../slider";
import HomePageContent from "../slider/slider-content";
import ServicesSection from "../services-section";
import AboutUs from "../about-us";

import url from "../../assets/images/home.png";
import { homepageSliderContentData } from "../../fixtures";

const App = () => {
	const homepageSliderContent = homepageSliderContentData.map(
		({ id, text, title }, index) => (
			<HomePageContent key={id} text={text} title={title} index={index} />
		)
	);

	return (
		<>
			<Header />
			<Section backgroundUrl={url} height={"670px"} shadow>
				<Slider>{homepageSliderContent}</Slider>
			</Section>
			<Section isGreyBg height={"128.5vh"}>
				<ServicesSection />
			</Section>
			<Section height={"90vh"}>
				<AboutUs />
			</Section>
		</>
	);
};

export default App;
