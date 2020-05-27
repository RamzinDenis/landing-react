import React from "react";
import styles from "./section.module.scss";
import PropTypes from "prop-types";

const Section = ({
	isGreyBg,
	height,
	backgroundUrl,
	shadow,
	children,
	shadowOpacity,
}) => {
	const sectionClassess = isGreyBg
		? `${styles.main} ${styles.main_grey}`
		: `${styles.main}`;
	return (
		<section
			className={sectionClassess}
			style={{ backgroundImage: `url(${backgroundUrl})`, height: height }}
		>
			{shadow && (
				<div
					className={styles.main__shadow}
					style={{ backgroundColor: `rgba(0, 0, 0, ${shadowOpacity})` }}
				></div>
			)}

			<div className={styles.main__container}>{children}</div>
		</section>
	);
};

Section.propTypes = {
	isGreyBg: PropTypes.bool,
	backgroundUrl: PropTypes.string,
	height: PropTypes.string.isRequired,
	shadow: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]).isRequired,
	shadowOpacity: PropTypes.number,
};

export default Section;