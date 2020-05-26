import React from "react";
import PropTypes from "prop-types";
import styles from "./arrow.module.scss";

const Arrow = ({ isRight }) => {
	const classNames = isRight
		? `${styles.arrow__icon} ${styles.right}`
		: `${styles.arrow__icon} ${styles.left}`;
	return (
		<div className={styles.arrow}>
			<div className={styles.arrow__bg}></div>
			<i className={classNames}></i>
		</div>
	);
};

Arrow.propTypes = {
	isRight: PropTypes.bool,
};

export default Arrow;
