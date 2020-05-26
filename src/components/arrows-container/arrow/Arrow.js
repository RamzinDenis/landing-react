import React from "react";
import PropTypes from "prop-types";
import styles from "./arrow.module.scss";
import { ReactComponent as ArrowLeft } from "../../../assets/svg/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../../assets/svg/arrow-right.svg";

const Arrow = ({ isRight }) => {
	return (
		<div className={styles.arrow}>
			<div className={styles.arrow__bg}></div>
			<i>{isRight ? <ArrowRight /> : <ArrowLeft />}</i>
		</div>
	);
};

Arrow.propTypes = {
	isRight: PropTypes.bool,
};

export default Arrow;
