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
		const { children, maxLength } = this.props;
		return (
			<div className={styles.slider__container}>
				<Provider
					value={{
						currentItem: this.state.currentItem,
						setCurrentItem: this.setState.bind(this),
						maxLength,
					}}
				>
					{children}
					<ArrowContainer />
					<Dots />
				</Provider>
			</div>
		);
	}
}

Slider.defaultProps = {
	maxLength: 4,
};

Slider.propTypes = {
	children: PropTypes.element.isRequired,
	maxLength: PropTypes.number.isRequired,
};

export default Slider;
