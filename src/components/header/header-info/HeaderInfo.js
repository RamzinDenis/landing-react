import React from "react";
import HeaderInfoItem from "./header-info-item";
import styles from "./header-info.module.scss";

import { headerInfoData } from "../../../fixtures";

const HeaderInfo = () => {
	return (
		<div className={styles.header__info}>
			{headerInfoData.map(item => (
				<HeaderInfoItem
					text={item.text}
					key={item.id}
					children={item.children}
				/>
			))}
		</div>
	);
};

export default HeaderInfo;
