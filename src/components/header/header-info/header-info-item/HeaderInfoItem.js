import React from "react";
import PropsTypes from "propTypes";
import styles from "./header-info-item.module.scss";

const HeaderInfoItem = ({ text, children }) => {
	return (
		<div className={styles.header__info__item}>
			<span className={styles.header__info__text}>{text}</span>
			<span className={styles.header__info__icon}>{children}</span>
		</div>
	);
};

HeaderInfoItem.propTypes = {
	text: PropsTypes.string.isRequired,
	children: PropsTypes.element.isRequired,
};

export default HeaderInfoItem;
