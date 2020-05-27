import React from "react";
import styles from "./about-us-item.module.scss";
import { BASE_URL } from "../../../fixtures";
import PropTypes from "prop-types";

const AboutUsItem = ({ link, text, number }) => {
	return (
		<div className={styles.item}>
			<div className={styles.item__cases}>
				<h2 className={styles.item__number}>{number}</h2>
				<p className={styles.item__text}>{text}</p>
				<a href={BASE_URL} className={styles.item__link}>
					{link}
				</a>
			</div>
		</div>
	);
};

AboutUsItem.propTypes = {
	link: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	number: PropTypes.number.isRequired,
};

export default AboutUsItem;
