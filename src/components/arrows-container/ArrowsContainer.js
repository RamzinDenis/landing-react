import React from "react";
import PropTypes from "prop-types";
import styles from "./arrows-container.module.scss";
import Arrow from "./arrow";

const ArrowContainer = ({ blue }) => {
	return (
		<div className={styles.arrow_container}>
			<Arrow blue={blue} />
			<Arrow isRight blue={blue} />
		</div>
	);
};

ArrowContainer.propTypes = {
	blue: PropTypes.bool,
	isRight: PropTypes.bool,
};

export default ArrowContainer;
