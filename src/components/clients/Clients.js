import React from "react";
import title from "../services-section/services-section.module.scss";
import styles from "./clients.module.scss";

const Clients = () => {
	const subTitleNames = `${title.subtitle} ${styles.subtitle}`;
	const titleNames = `${title.title} ${styles.title}`;

	return (
		<div>
			<h3 className={subTitleNames}>Наши клиенты</h3>
			<h2 className={titleNames}>С нами работают</h2>
		</div>
	);
};

export default Clients;
