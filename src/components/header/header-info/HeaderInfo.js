import React from "react";
import IconItem from "../../icon-item";
import styles from "./header-info.module.scss";

import { headerInfoData } from "../../../fixtures";

const HeaderInfo = () => {
	return (
		<div className={styles.header__info}>
			{headerInfoData.map(item => (
				<IconItem text={item.text} key={item.id} children={item.children} />
			))}
		</div>
	);
};

export default HeaderInfo;
