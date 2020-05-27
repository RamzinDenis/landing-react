import React, { Children } from "react";
import styles from "./client-content.module.scss";
import ClientsContentItem from "./clients-content-item";
import PropTypes from "prop-types";
import { Consumer } from "../../../../Context";

const ClientsContent = ({ index, src }) => {
	return (
		<Consumer>
			{value => (
				<div className={styles.container}>
					{index === value.currentItem &&
						Children.toArray(
							[...Array(4)].map(item => <ClientsContentItem src={src} />)
						)}
				</div>
			)}
		</Consumer>
	);
};

ClientsContent.propTypes = {
	index: PropTypes.number.isRequired,
};

export default ClientsContent;
