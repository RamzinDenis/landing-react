import React from "react";
import styles from "./header.module.scss";
import NavBar from "../nav-bar";
import Logo from "../logo";

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<NavBar classN={styles.header__navbar} />
		</header>
	);
};

export default Header;
