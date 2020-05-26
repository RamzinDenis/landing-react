import React from "react";
import styles from "./slider.module.scss";
import PropTypes from "prop-types";

const Slider = ({ children }) => {
	return (
		<div className={styles.slider}>
			<div className={styles.slider__container}>{children}</div>
		</div>
	);
};

Slider.propTypes = {
	children: PropTypes.element.isRequired,
};

export default Slider;
