import React from "react";

const Input = ({ text, placeholder, type, classN, name }) => {
	return (
		<label>
			{text}
			<input
				type={type}
				placeholder={placeholder}
				className={classN}
				name={name}
			/>
		</label>
	);
};

export default Input;
