import React, { Children } from "react";
import Header from "../header";
import Section from "../main";
import Slider from "../slider";
import HomePageContent from "../slider/slider-content";
import GridSection from "../grid-section";
import serviceItemUrl from "../../assets/images/services.png";

import url from "../../assets/images/home.png";
import { homepageSliderContentData } from "../../fixtures";
import ServiceItem from "../grid/service-item";

const App = () => {
	const homepageSliderContent = homepageSliderContentData.map(
		({ id, text, title }, index) => (
			<HomePageContent key={id} text={text} title={title} index={index} />
		)
	);
	const gridServicesSectionItems = Children.toArray(
		[...Array(6)].map(item => (
			<ServiceItem
				backgroundUrl={serviceItemUrl}
				title={"Бухгатерское обслуживание"}
			/>
		))
	);

	return (
		<>
			<Header />
			<Section backgroundUrl={url} height={"670px"} shadow>
				<Slider>{homepageSliderContent}</Slider>
			</Section>
			<Section isGreyBg height={"128.5vh"}>
				<GridSection
					subTitle={"Наши услуги"}
					title={"Мы специализируемся"}
					isLargeGridSize
				>
					{gridServicesSectionItems}
				</GridSection>
			</Section>
			<Section height={"90vh"}>
				<GridSection />
			</Section>
		</>
	);
};

export default App;
