import React from "react";
import ObserverComponent from "../ObserverComponent.js";

export default class Example extends React.Component {
	state = {
		loaded: false
	};

	onShow = () => {
		this.setState({ loaded: !this.state.loaded });
	};

	render() {
		return (
			<div style={{ paddingTop: 900, height: 1000 }}>
				<ObserverComponent onShow={this.onShow}>
					{this.state.loaded ? "true" : "false"}
				</ObserverComponent>
			</div>
		);
	}
}
