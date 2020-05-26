import React from "react";
import styles from "./nav-bar.module.scss";
import { navbarData, BASE_URL } from "../../fixtures";

const NavBar = () => {
	return (
		<nav>
			<ul className={styles.menu}>
				{navbarData.map((item, index) => (
					<li key={index} className={styles.menu__item}>
						<a href={`${BASE_URL}`} className={styles.menu__link}>
							{item}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
