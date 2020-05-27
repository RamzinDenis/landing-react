import React from "react";
import styles from "./clients-content-item.module.scss";
import PropTypes from "prop-types";

const ClientsContentItem = imgSrc => {
	return (
		<div className={styles.item}>
			<img className={styles.img} src={imgSrc} alt="Company Name" />
		</div>
	);
};

ClientsContent.propTypes = {
	imgSrc: PropTypes.string.isRequired,
};

export default ClientsContentItem;
