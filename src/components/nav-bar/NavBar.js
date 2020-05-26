import React from "react";
import styles from "./nav-bar.module.scss";
import { navbarData, BASE_URL } from "../../fixtures";

const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.nav__menu}>
				{navbarData.map((item, index) => (
					<li key={index} className={styles.nav__menu__item}>
						<a href={`${BASE_URL}`} className={styles.nav__menu__link}>
							{item}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
