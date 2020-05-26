import React from "react";
import styles from "./homepage-content.module.scss";
import PropTypes from "prop-types";

const HomePageSliderItem = ({ title, text }) => {
	return (
		<div className={styles.homepage_content}>
			<h2 className={styles.homepage_slider__title}>{title}</h2>
			<button></button>
		</div>
	);
};

HomePageSliderItem.propTypes = {
	text: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default HomePageSliderItem;
