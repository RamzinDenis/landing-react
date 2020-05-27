import React from "react";
import PropTypes from "prop-types";
import styles from "./arrow.module.scss";
import { Consumer } from "../../../Context";

const Arrow = ({ isRight }) => {
	const iconClassNames = isRight
		? `${styles.arrow__icon} ${styles.right}`
		: `${styles.arrow__icon} ${styles.left}`;

	const bgClassNames = isRight
		? `${styles.arrow__bg}`
		: `${styles.arrow__bg} ${styles.arrow__bg_left}`;

	const handleArrowClick = value =>
		value.setCurrentItem((prevState, props) => ({
			currentItem: isRight
				? prevState.currentItem >= value.maxLength - 1
					? 0
					: prevState.currentItem + 1
				: prevState.currentItem <= 0
				? value.maxLength - 1
				: prevState.currentItem - 1,
		}));

	return (
		<div className={styles.arrow}>
			<Consumer>
				{value => (
					<div
						className={bgClassNames}
						onClick={() => handleArrowClick(value)}
					></div>
				)}
			</Consumer>
			<i className={iconClassNames}></i>
		</div>
	);
};

Arrow.propTypes = {
	isRight: PropTypes.bool,
};

export default Arrow;
