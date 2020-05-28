import React from "react";
import styles from "./form.module.scss";
import Input from "../input";
import PropTypes from "prop-types";
import Button from "../button";

const Form = ({ data }) => {
	return (
		<form className={styles.form}>
			<div className={styles.form__name}>
				{data
					.filter((_, index) => index < 2)
					.map(item => (
						<Input
							key={item.id}
							placeholder={item.placeholder}
							text={item.text}
							classN={item.classN}
						/>
					))}
			</div>
			<Input
				placeholder={data[data.length - 1].placeholder}
				text={data[data.length - 1].text}
			/>
			<div className={styles.button__wrapper}>
				<Button text={"Отправить сообщение"} />
			</div>
		</form>
	);
};

Form.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Form;
