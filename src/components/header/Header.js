import React, { useState } from "react";
import styles from "./header.module.scss";
import NavBar from "../nav-bar";
import Logo from "../logo";
import HeaderInfo from "./header-info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	const [visible, setVisible] = useState(false);
	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<Logo />
				<div className={styles.header__menu}>
					<HeaderInfo />
					<NavBar classN={styles.header__navbar} />
				</div>
			</div>
			<FontAwesomeIcon
				icon={faBars}
				className={styles.icon}
				onClick={() => setVisible(!visible)}
			/>
			{visible && (
				<div className={styles.mobile__menu}>
					<NavBar classN={styles.header__navbar} />
				</div>
			)}
		</header>
	);
};

export default Header;
