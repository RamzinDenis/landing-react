import React from "react";
import styles from "./arrow.module.scss";

export default function (WrappedComponent) {
	const HocComponent = props => {
		const { isRight, blue } = props;
		let iconClassNames = isRight
			? `${styles.arrow__icon} ${styles.right}`
			: `${styles.arrow__icon} ${styles.left}`;

		let bgClassNames = isRight
			? `${styles.arrow__bg}`
			: `${styles.arrow__bg} ${styles.arrow__bg_left}`;

		bgClassNames += blue ? ` ${styles.arrow__blue}` : "";

		const handleArrowClick = value =>
			value.setCurrentItem((prevState, props) => ({
				currentItem: isRight
					? prevState.currentItem >= value.maxLength - 1
						? 0
						: prevState.currentItem + 1
					: prevState.currentItem <= 0
					? value.maxLength - 1
					: prevState.currentItem - 1,
			}));
		return (
			<WrappedComponent
				handleArrowClick={handleArrowClick}
				bgClassNames={bgClassNames}
				iconClassNames={iconClassNames}
			/>
		);
	};
	return HocComponent;
}
