import React from "react";
import styles from "./contact-info.module.scss";
import IconItem from "../icon-item/IconItem";
import { contactInfoIconsData, inputData } from "../../fixtures";
import Input from "../input";

const ContactInfo = () => {
	return (
		<div className={styles.contact}>
			<div className={styles.contact__info}>
				<h2 className={styles.contact__title}>Связь с нами</h2>
				<p className={styles.contact__text}>
					У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!
				</p>
				<div className={styles.contact__icons}>
					{contactInfoIconsData.map((item, index) => (
						<IconItem text={item.text} children={item.children} key={index} />
					))}
				</div>
			</div>
			<form className={styles.form}>
				<div className={styles.form__name}>
					{inputData
						.filter((_, index) => index < 2)
						.map(item => (
							<Input
								key={item.id}
								placeholder={item.placeholder}
								text={item.text}
							/>
						))}
				</div>
			</form>
		</div>
	);
};

export default ContactInfo;
