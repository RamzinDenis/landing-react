import React from "react";
import styles from "./input.module.scss";

const Input = ({ text, placeholder, type = "text", name }) => {
	return (
		<label className={styles.label}>
			{text}
			<input
				type={type}
				placeholder={placeholder}
				name={name}
				className={styles.input}
			/>
		</label>
	);
};

export default Input;
