import React, { Children } from "react";
import titles from "../services-section/services-section.module.scss";
import styles from "./about-us.module.scss";
import Grid from "../grid";
import AboutUsItem from "./about-us-item/";

const About = () => {
	return (
		<div className={styles.about}>
			<div className={styles.about__info}>
				<h3 className={titles.subtitle}>О нас</h3>
				<h2 className={styles.title}>
					Компания <span className={styles.title_extra}>ИвановПром</span>
				</h2>
				<div className={styles.about__text}>
					Lorem Ipsum - это текст-"рыба", часто используемый в печати и
					вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
					латинице с начала XVI века. В то время некий безымянный печатник
					создал большую коллекцию размеров и форм шрифтов, используя Lorem
					Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
					без заметных изменений пять веков, но и перешагнул в электронный
					дизайн.
				</div>
			</div>
			<div className={styles.about__container}>
				<Grid>
					{Children.toArray(
						[...Array(4)].map(item => (
							<AboutUsItem
								text="Завершено крупных сделок"
								number={90}
								link="Все кейсы"
							/>
						))
					)}
				</Grid>
			</div>
		</div>
	);
};

export default About;
