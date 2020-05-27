import React from "react";
import titleStyles from "../services-section/services-section.module.scss";
import styles from "./slider-header.module.scss";
import PropTypes from "prop-types";

const SliderHeader = ({ isClientsSection, title, subtitle }) => {
	const subTitleNames = `${titleStyles.subtitle} ${styles.subtitle}`;
	const titleNames = `${titleStyles.title} ${styles.title}`;

	return (
		<div>
			<h3 className={isClientsSection ? subTitleNames : titleStyles.subtitle}>
				{subtitle}
			</h3>
			<h2 className={titleNames}>{title}</h2>
		</div>
	);
};

SliderHeader.propTypes = {
	isClientsSection: PropTypes.bool,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
};

export default SliderHeader;
