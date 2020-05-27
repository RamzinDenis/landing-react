import React from "react";
import styles from "./main.module.scss";
import PropTypes from "prop-types";

const Main = ({
	isGreyBg,
	height,
	backgroundUrl,
	shadow,
	children,
	padding,
}) => {
	const sectionClassess = isGreyBg
		? `${styles.main} ${styles.main_grey}`
		: `${styles.main}`;
	return (
		<section
			className={sectionClassess}
			style={{ backgroundImage: `url(${backgroundUrl})`, height: height }}
		>
			{shadow && <div className={styles.main__shadow}></div>}

			<div className={styles.main__container}>{children}</div>
		</section>
	);
};

Main.propTypes = {
	isGreyBg: PropTypes.bool,
	backgroundUrl: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	shadow: PropTypes.bool,
	children: PropTypes.element.isRequired,
	padding: PropTypes.string.isRequired,
};

export default Main;
