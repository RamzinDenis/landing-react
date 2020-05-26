import React from "react";
import styles from "./header.module.scss";
import NavBar from "../nav-bar";
import Logo from "../logo";
import HeaderInfo from "./header-info";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<Logo />
				<div>
					<HeaderInfo />
					<NavBar classN={styles.header__navbar} />
				</div>
			</div>
		</header>
	);
};

export default Header;
