import React from "react";
import { ReactComponent as LogoSvg } from "../../asserts/svg/logo.svg";
import styles from "./logo.module.scss";

const Logo = () => {
	return (
		<div className={styles.logo}>
			<LogoSvg />
			<h2 className={styles.logo__title}>BuhOne</h2>
		</div>
	);
};

export default Logo;
