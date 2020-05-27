import React from "react";
import styles from "./service-item.module.scss";
import PropTypes from "prop-types";

const ServiceItem = ({ backgroundUrl, title }) => {
	return (
		<div
			className={styles.item}
			style={{ backgroundImage: `url(${backgroundUrl})` }}
		>
			<div className={styles.item__shadow}></div>
			<h3 className={styles.item__title}>{title}</h3>
		</div>
	);
};

ServiceItem.propTypes = {
	backgroundUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default ServiceItem;
