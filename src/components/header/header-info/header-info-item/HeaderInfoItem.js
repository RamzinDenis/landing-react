import React from "react";
import PropTypes from "prop-types";
import styles from "./header-info-item.module.scss";

const HeaderInfoItem = ({ text, children }) => {
	return (
		<div className={styles.header__info__item}>
			<span className={styles.header__info__icon}>{children}</span>
			<span className={styles.header__info__text}>{text}</span>
		</div>
	);
};

HeaderInfoItem.propTypes = {
	text: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
};

export default HeaderInfoItem;
