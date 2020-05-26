import React, { Children } from "react";
import styles from "./dots.module.scss";

const Dots = () => {
	return (
		<div className={styles.dots}>
			{Children.toArray(
				[...Array(4)].map(item => <div className={styles.dots__item}></div>)
			)}
		</div>
	);
};

export default Dots;
