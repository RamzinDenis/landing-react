import React from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../../Context";
import ArrowContainer from "./ArrowContainer";
import styles from "./arrow.module.scss";

const Arrow = ({ isRight, handleArrowClick, bgClassNames, iconClassNames }) => {
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
	handleArrowClick: PropTypes.func.isRequired,
	bgClassNames: PropTypes.string.isRequired,
	iconClassNames: PropTypes.string.isRequired,
};

export default ArrowContainer(Arrow);
