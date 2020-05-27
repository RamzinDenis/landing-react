import React, { Children } from "react";
import styles from "./dots.module.scss";
import { Consumer } from "../../Context";
import PropTypes from "prop-types";

const Dots = ({ blue }) => {
	const handleDotClick = (value, index) =>
		value.setCurrentItem({ currentItem: index });

	const dotsNames = blue
		? `${styles.dots__item} ${styles.dots__item_blue}`
		: `${styles.dots__item} `;
	return (
		<div className={styles.dots}>
			<Consumer>
				{value =>
					Children.toArray(
						[...Array(4)].map((item, index) => (
							<div
								className={dotsNames}
								style={{
									opacity: index === value.currentItem ? "1" : "0.4",
								}}
								onClick={() => handleDotClick(value, index)}
							></div>
						))
					)
				}
			</Consumer>
		</div>
	);
};

Dots.propTypes = {
	blue: PropTypes.bool,
};

export default Dots;
