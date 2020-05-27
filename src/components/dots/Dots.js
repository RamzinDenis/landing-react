import React, { Children } from "react";
import styles from "./dots.module.scss";
import { Consumer } from "../../Context";

const Dots = () => {
	const handleDotClick = (value, index) =>
		value.setCurrentItem({ currentItem: index });
	return (
		<div className={styles.dots}>
			<Consumer>
				{value =>
					Children.toArray(
						[...Array(4)].map((item, index) => (
							<div
								className={styles.dots__item}
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

export default Dots;
