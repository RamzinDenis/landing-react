import React from "react";
import styles from "./input.module.scss";
import PropTypes from "prop-types";

const Input = ({ text, placeholder, type = "text", name, classN }) => {
	const handleChange = () => null;
	const labelNames = classN ? `${styles.label} + ${classN}` : `${styles.label}`;

	return (
		<label className={labelNames}>
			{text}
			<input
				type={type}
				placeholder={placeholder}
				name={name}
				className={styles.input}
				onChange={handleChange}
			/>
		</label>
	);
};

Input.propTypes = {
	text: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string,
	classN: PropTypes.string,
};

export default Input;
