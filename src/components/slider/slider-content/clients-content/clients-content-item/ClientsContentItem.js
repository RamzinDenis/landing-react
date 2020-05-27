import React from "react";
import styles from "./clients-content-item.module.scss";
import PropTypes from "prop-types";

const ClientsContentItem = ({ src }) => {
	return (
		<div className={styles.item}>
			<img className={styles.img} src={src} alt="Partners" />
		</div>
	);
};

ClientsContentItem.propTypes = {
	src: PropTypes.string.isRequired,
};

export default ClientsContentItem;
