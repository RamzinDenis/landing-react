import React from "react";
import titles from "../services-section/services-section.module.scss";
import styles from "./about-us.module.scss";
import Grid from "../grid";

const About = () => {
	return (
		<div className={styles.about}>
			<div className={styles.about__info}>
				<h3 className={titles.subtitle}>О нас</h3>
				<h2 className={styles.title}>Компания</h2>
				<h2 className={styles.title__extra}>ИвановПром</h2>
			</div>
			<Grid />
		</div>
	);
};

export default About;
