import React from "react";
import styles from "./grid.module.scss";
import PropTypes from "prop-types";

const Grid = ({ children, isLarge }) => {
	const gridClassNames = isLarge
		? `${styles.grid} ${styles.large}`
		: `${styles.grid}`;
	return <div className={gridClassNames}>{children}</div>;
};

Grid.propTypes = {
	isLarge: PropTypes.bool,
};

export default Grid;
