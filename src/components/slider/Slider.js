import React from "react";
import styles from "./slider.module.scss";
import PropTypes from "prop-types";
import ArrowBox from "../arrows-container";

const Slider = ({ children, backgroundUrl, height, Shadow }) => {
	return (
		<div
			className={styles.slider}
			style={{ backgroundImage: `url(${backgroundUrl})`, height: height }}
		>
			<div className={styles.slider__shadow}></div>
			<div className={styles.slider__container}>
				{children}
				<ArrowBox />
			</div>
		</div>
	);
};

Slider.propTypes = {
	children: PropTypes.element.isRequired,
	backgroundUrl: PropTypes.string,
	height: PropTypes.string.isRequired,
};

export default Slider;
