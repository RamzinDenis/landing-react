import React from "react";
import { ReactComponent as Phone } from "./assets/svg/phone.svg";
import { ReactComponent as Clock } from "./assets/svg/clock.svg";
import { ReactComponent as Envelope } from "./assets/svg/envelope.svg";
import { ReactComponent as Geo } from "./assets/svg/geo.svg";
import microsoftSrc from "./assets/images/microsoft.png";
import facebookSrc from "./assets/images/facebook.png";
import googleSrc from "./assets/images/google.png";
import vkSrc from "./assets/images/vk.png";

import defaultPersonSrc from "./assets/images/person1.png";
import malePersonSrc from "./assets/images/person4.png";
import femalePersonSrc from "./assets/images/person2.png";
import anotherFemalePersonSrc from "./assets/images/person3.png";

import { ReactComponent as EnvelopeWhite } from "./assets/svg/envelopeW.svg";
import { ReactComponent as PhoneWhite } from "./assets/svg/phoneW.svg";

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

export const reviewsSectionContentData = [
	{
		src: defaultPersonSrc,
		id: 0,
		text: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.`,
		name: "Екатерина Иванова",
		role: `Директор ООО "Раз два" `,
	},
	{
		src: malePersonSrc,
		id: 1,
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.",
		name: "Иван Дейко",
		role: `Директор ООО "Южный Шельф"`,
	},

	{
		src: femalePersonSrc,
		id: 2,
		text:
			"Urna cursus eget nunc scelerisque. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Rhoncus mattis rhoncus urna neque viverra justo nec. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Euismod in pellentesque massa placerat duis. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Donec ultrices tincidunt arcu non sodales.",
		role: `Директор ООО "Три Четыре"`,
		name: "Айше Тахтарова",
	},

	{
		src: anotherFemalePersonSrc,
		id: 3,
		text:
			"Platea dictumst quisque sagittis purus sit. Vel pharetra vel turpis nunc. Gravida dictum fusce ut placerat. Enim diam vulputate ut pharetra sit. Feugiat in uis ultricies lacus sed turpis tincidunt id. Rhoncus mattis rhoncus urna neque viverra justo nec  Rhoncus mattis rhoncus urna neque viverra justo nec. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Euismod in pellentesque massa placerat dui  .",
		role: `Администратор ООП "Класс"`,
		name: "Анна Михлина",
	},
];

export const contactInfoIconsData = [
	{
		text: "+7 (111) 222-33-44",
		id: 1,
		children: <PhoneWhite />,
	},
	{
		text: "order@bu-one.ru",
		id: 2,
		children: <EnvelopeWhite />,
	},
];

export const inputData = [
	{
		text: "Имя",
		placeholder: "Иван",
		id: 0,
	},
	{
		text: "Фамилия",
		placeholder: "Иванов",
		id: 1,
	},
	{
		text: "Сообщение",
		placeholder: "Введите ваше сообщение",
		id: 2,
	},
];
