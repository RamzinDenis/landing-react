import React from "react";
import styles from "./grid-section.module.scss";
import Grid from "../grid";
import PropTypes from "prop-types";

const GridSection = ({ subTitle, title, children, isLargeGridSize }) => {
	return (
		<div>
			<h3 className={styles.subtitle}>{subTitle}</h3>
			<h2 className={styles.title}>{title}</h2>
			<Grid isLarge={isLargeGridSize}>{children} </Grid>
		</div>
	);
};

GridSection.propTypes = {
	subTitle: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
	isLargeGridSize: PropTypes.bool,
};

export default GridSection;
