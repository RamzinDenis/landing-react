import React from "react";
import Header from "../header";
import Section from "../section";
import Slider from "../slider";
import {
	HomePageContent,
	ClientsContent,
	ReviewsContent,
} from "../slider/slider-content";
import ServicesSection from "../services-section";
import AboutUs from "../about-us";
import SliderHeader from "../slider-header";
import ContactInfo from "../contact-info";
import Footer from "../footer";

import url from "../../assets/images/home.png";
import {
	homepageSliderContentData,
	clientsSectionContentData,
	reviewsSectionContentData,
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

	const reviewsSectionContent = reviewsSectionContentData.map((item, index) => (
		<ReviewsContent
			src={item.src}
			index={index}
			key={item.id}
			role={item.role}
			text={item.text}
			name={item.name}
		/>
	));
	return (
		<>
			<Header />
			<Section backgroundUrl={url} height={"670px"} shadow>
				<Slider marginBottom={113}>{homepageSliderContent}</Slider>
			</Section>
			<Section isGreyBg minHeight={"1242px"}>
				<ServicesSection />
			</Section>
			<Section minHeight={"844px"}>
				<AboutUs />
			</Section>
			<Section isGreyBg height={"630px"}>
				<SliderHeader
					subtitle="Наши клиенты"
					title="С нами работают"
					isClientsSection
				/>
				<Slider blue marginBottom={100}>
					{clientSectionContent}
				</Slider>
			</Section>
			<Section minHeight={"897px"}>
				<SliderHeader subtitle="Отзывы" title="Ваши благодарности" />
				<Slider blue marginBottom={130}>
					{reviewsSectionContent}
				</Slider>
			</Section>
			<Section
				minHeight={"623px"}
				backgroundUrl={url}
				shadow
				shadowOpacity={0.8}
			>
				<ContactInfo />
			</Section>
			<Footer />
		</>
	);
};

export default App;
