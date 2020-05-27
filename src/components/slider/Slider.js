import React from "react";
import styles from "./slider.module.scss";
import PropTypes from "prop-types";
import ArrowContainer from "../arrows-container";
import Dots from "../dots";
import { Provider } from "../../Context";

class Slider extends React.Component {
	state = {
		currentItem: 0,
	};
	render() {
		const { children, maxLength, blue } = this.props;
		return (
			<Provider
				value={{
					currentItem: this.state.currentItem,
					setCurrentItem: this.setState.bind(this),
					maxLength,
				}}
			>
				{children}
				<ArrowContainer blue={blue} />
				<Dots blue={blue} />
			</Provider>
		);
	}
}

Slider.defaultProps = {
	maxLength: 4,
};

Slider.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
	maxLength: PropTypes.number.isRequired,
	blue: PropTypes.bool,
};

export default Slider;
