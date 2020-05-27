import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<p className={styles.footer__text}>
					2019 (с) Все права защищены. БухОне.ру
				</p>
				<p className={styles.footer__text}>Разработано: BuhOne</p>
			</div>
		</footer>
	);
};

export default Footer;
