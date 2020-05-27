import React from "react";
import styles from "./review-item.module.scss";
import { Consumer } from "../../../../Context";

const ReviewItem = ({ name, role, text, src, index }) => {
	return (
		<Consumer>
			{value =>
				index === value.currentItem && (
					<div className={styles.item}>
						<div className={styles.item__content}>
							<p className={styles.item__text}>{text}</p>
							<div className={styles.person}>
								<img alt="person" className={styles.person__image} src={src} />

								<div>
									<h3 className={styles.person__name}>{name}</h3>
									<h4 className={styles.person__role}>{role}</h4>
								</div>
							</div>
						</div>
					</div>
				)
			}
		</Consumer>
	);
};

export default ReviewItem;
