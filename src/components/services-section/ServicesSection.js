import React, { Children } from "react";
import styles from "./services-section.module.scss";
import Grid from "../grid";
import servicesUrl from "../../assets/images/services.png";
import ServiceItem from "./service-item";

const ServicesSection = () => {
	const ServiceSectionItems = Children.toArray(
		[...Array(6)].map(item => (
			<ServiceItem
				backgroundUrl={servicesUrl}
				title={"Бухгатерское обслуживание"}
			/>
		))
	);
	return (
		<div>
			<h3 className={styles.subtitle}>Наши услуги</h3>
			<h2 className={styles.title}>Мы специализируемся</h2>
			<Grid isLarge>{ServiceSectionItems} </Grid>
		</div>
	);
};

export default ServicesSection;
