import React from "react";
import Header from "../header";
import Section from "../main";
import Slider from "../slider";
import { HomePageContent, ClientsContent } from "../slider/slider-content";
import ServicesSection from "../services-section";
import AboutUs from "../about-us";
import SliderHeader from "../slider-header";

import url from "../../assets/images/home.png";
import {
	homepageSliderContentData,
	clientsSectionContentData,
} from "../../fixtures";

const App = () => {
	const homepageSliderContent = homepageSliderContentData.map(
		({ id, text, title }, index) => (
			<HomePageContent key={id} text={text} title={title} index={index} />
		)
	);
	const clientSectionContent = clientsSectionContentData.map((item, index) => (
		<ClientsContent src={item.src} index={index} key={item.id} />
	));
	return (
		<>
			<Header />
			<Section backgroundUrl={url} height={"670px"} shadow>
				<Slider marginBottom={113}>{homepageSliderContent}</Slider>
			</Section>
			<Section isGreyBg height={"128.5vh"}>
				<ServicesSection />
			</Section>
			<Section height={"90vh"}>
				<AboutUs />
			</Section>
			<Section isGreyBg height={"630px"}>
				<SliderHeader subtitle="Наши клиенты" title="С нами работают" />
				<Slider blue marginBottom={100}>
					{clientSectionContent}
				</Slider>
			</Section>
			<Section height={"92.9vh"}>
				<SliderHeader subtitle="Отзывы" title="Ваши благодарности" />
			</Section>
		</>
	);
};

export default App;
