import React from "react";
import styles from "./input.module.scss";

const Input = ({ text, placeholder, type = "text", name }) => {
	const handleChange = () => null;
	return (
		<label className={styles.label}>
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

export default Input;
