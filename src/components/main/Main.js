import React from "react";
import styles from "./main.module.scss";
import PropTypes from "prop-types";

const Main = ({ isGreyBg }) => {
	const sectionClassess = isGreyBg
		? `${styles.main} ${styles.main_grey}`
		: `${styles.main}`;
	return (
		<section className={sectionClassess}>
			<div className={styles.main__container}></div>
		</section>
	);
};

Main.propTypes = {
	isGreyBg: PropTypes.bool,
};

export default Main;
