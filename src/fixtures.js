import React from "react";
import { ReactComponent as Phone } from "./asserts/svg/phone.svg";
import { ReactComponent as Clock } from "./asserts/svg/clock.svg";
import { ReactComponent as Envelope } from "./asserts/svg/envelope.svg";
import { ReactComponent as Geo } from "./asserts/svg/geo.svg";

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
