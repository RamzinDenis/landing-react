import React from "react";
import PropTypes from "prop-types";
import styles from "./icon-item.module.scss";

const IconItem = ({ text, children, isWhiteTheme }) => {
	return (
		<div className={styles.header__item}>
			<span className={styles.header__icon}>{children}</span>
			<span className={styles.header__text}>{text}</span>
		</div>
	);
};

IconItem.propTypes = {
	text: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
	isWhiteTheme: PropTypes.bool,
};

export default IconItem;
