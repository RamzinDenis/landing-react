import React from "react";
import styles from "./homepage-content.module.scss";
import PropTypes from "prop-types";
import Button from "../../../button";
import { Consumer } from "../../../../Context";

const HomePageSliderItem = ({ title, text, index }) => {
	return (
		<Consumer>
			{value =>
				index === value.currentItem && (
					<div className={styles.homepage__content}>
						<h2 className={styles.homepage__title}>{title}</h2>
						<Button text={text} />
					</div>
				)
			}
		</Consumer>
	);
};

HomePageSliderItem.propTypes = {
	text: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
};

export default HomePageSliderItem;
