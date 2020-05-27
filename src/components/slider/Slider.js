import React from "react";
import PropTypes from "prop-types";
import ArrowContainer from "../arrows-container";
import Dots from "../dots";
import { Provider } from "../../Context";
import styles from "./slider.module.scss";

class Slider extends React.Component {
	state = {
		currentItem: 0,
	};
	render() {
		const { children, maxLength, blue, marginBottom } = this.props;
		return (
			<Provider
				value={{
					currentItem: this.state.currentItem,
					setCurrentItem: this.setState.bind(this),
					maxLength,
				}}
			>
				{children}
				<div
					className={styles.icons_container}
					style={{ bottom: marginBottom + "px" }}
				>
					<Dots blue={blue} />
					<ArrowContainer blue={blue} margin={marginBottom} />
				</div>
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
	marginBottom: PropTypes.number.isRequired,
};

export default Slider;
