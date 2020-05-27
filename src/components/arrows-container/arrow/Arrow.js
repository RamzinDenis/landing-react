import React from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../../Context";
import ArrowHoc from "./ArrowHoc";
import styles from "./arrow.module.scss";

const Arrow = ({ isRight, handleArrowClick, bgClassNames, iconClassNames }) => {
	return (
		<Consumer>
			{value => (
				<div className={styles.arrow} onClick={() => handleArrowClick(value)}>
					<div className={bgClassNames}></div>
					<i className={iconClassNames}></i>
				</div>
			)}
		</Consumer>
	);
};

Arrow.propTypes = {
	isRight: PropTypes.bool,
	handleArrowClick: PropTypes.func.isRequired,
	bgClassNames: PropTypes.string.isRequired,
	iconClassNames: PropTypes.string.isRequired,
};

export default ArrowHoc(Arrow);
