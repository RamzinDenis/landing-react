import React from "react";
import styles from "./header.module.scss";
import NavBar from "../nav-bar";
import Logo from "../logo";

const Header = () => {
	return (
		<div className={styles.header}>
			<Logo />
			<NavBar classN={styles.header__navbar} />
		</div>
	);
};

export default Header;
