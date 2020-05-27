import React from "react";
import PropTypes from "prop-types";
import styles from "./arrows-container.module.scss";
import Arrow from "./arrow";

const ArrowContainer = ({ white, blue }) => {
	return (
		<div className={styles.arrow_container}>
			<Arrow blue={blue} />
			<Arrow isRight blue={blue} />
		</div>
	);
};

const requiredPropsCheck = (props, propName, componentName) => {
	if (!props.white && !props.blue) {
		return new Error(
			`One of 'white' or 'blue' is required by '${componentName}' component.`
		);
	}
};

ArrowContainer.propTypes = {
	white: requiredPropsCheck,
	blue: requiredPropsCheck,
	isRight: PropTypes.bool,
};

export default ArrowContainer;
