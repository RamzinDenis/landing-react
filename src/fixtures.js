import React from "react";
import { ReactComponent as Phone } from "./assets/svg/phone.svg";
import { ReactComponent as Clock } from "./assets/svg/clock.svg";
import { ReactComponent as Envelope } from "./assets/svg/envelope.svg";
import { ReactComponent as Geo } from "./assets/svg/geo.svg";
import microsoftSrc from "./assets/images/microsoft.png";
import facebookSrc from "./assets/images/facebook.png";
import googleSrc from "./assets/images/google.png";
import vkSrc from "./assets/images/vk.png";

export const navbarData = [
	"Главная",
	"Услуги",
	"Кейсы",
	"О компании",
	"Контакты",
];

export const BASE_URL = "#";

export const headerInfoData = [
	{
		text: "8 (111) 222-33-44",
		id: 1,
		children: <Phone />,
	},
	{
		text: "Пн-Пт 10:00-18:00",
		id: 2,
		children: <Clock />,
	},
	{
		text: "order@buhone.ru",
		id: 3,
		children: <Envelope />,
	},
	{
		text: "Невский пр. 130",
		id: 4,
		children: <Geo />,
	},
];

export const homepageSliderContentData = [
	{
		text: "Наша презентация",
		title: "Бухгалтерские услуги в Санкт-Петербурге",
		id: 0,
	},
	{
		text: "Наши услуги",
		title: "Ознакомьтесь с нашими услугами",
		id: 1,
	},
	{
		text: "О компании",
		title: "Узнайте о нас больше",
		id: 2,
	},
	{
		text: "Контакты",
		title: "Узнайте как с нами связаться",
		id: 3,
	},
];

export const clientsSectionContentData = [
	{
		src: microsoftSrc,
		id: 0,
	},
	{
		src: facebookSrc,
		id: 1,
	},

	{
		src: googleSrc,
		id: 2,
	},

	{
		src: vkSrc,
		id: 3,
	},
];
