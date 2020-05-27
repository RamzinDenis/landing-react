import React from "react";
import titleStyles from "../services-section/services-section.module.scss";
import styles from "./slider-header.module.scss";

const SliderHeader = ({ isReviewsSection, title, subtitle }) => {
	const subTitleNames = `${titleStyles.subtitle} ${styles.subtitle}`;
	const titleNames = `${titleStyles.title} ${styles.title}`;

	return (
		<div>
			<h3 className={isReviewsSection ? subTitleNames : titleStyles.subtitle}>
				{subtitle}
			</h3>
			<h2 className={titleNames}>{title}</h2>
		</div>
	);
};

export default SliderHeader;
