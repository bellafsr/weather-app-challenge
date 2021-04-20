import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import {
    IAPIWeatherInfo, IAPIWeatherInfoGroup,
} from '../../helpers/interfaces';

import { shadowStyle } from "../../helpers/styles/shadows";

import * as ModalActions from "../../store/actions/ModalActions";

interface IComponentProps {
	city: IAPIWeatherInfo;
	openModal(data: IAPIWeatherInfo): void;
}

class LocationsComponent extends Component<IComponentProps> {
	constructor(
		public props: IComponentProps,
	) {
		super(props);
	}

	render() {
		if (this.props.city) {
			return (
				<TouchableOpacity
					style={styles.Container}
					onPress={() => this.props.openModal(this.props.city)}
				>
					<View style={styles.IconContainer}>
						<Image
							style={styles.WeatherImage}
							source={{
								uri: `http://openweathermap.org/img/wn/${
									this.props.city.weather![0].icon
								}@4x.png`,
							}}
						/>
					</View>
					<View style={styles.InfoContainer}>
						<View style={styles.CityContainer}>
							<Image
								style={styles.flagImage}
								source={{
									uri: `http://openweathermap.org/images/flags/${this.props.city.sys!.country.toLocaleLowerCase()}.png`,
								}}
							/>
							<Text style={styles.CityText}>
								{this.props.city.name}
							</Text>
						</View>
						<Text>
							{this.props.city.weather![0].description}
						</Text>
					</View>
					<View style={styles.ClimateContainer}>
						<Text style={styles.ClimateInfo}>
							{Math.floor(this.props.city.main!.temp) + "°C"}
						</Text>
					</View>
				</TouchableOpacity>
			);
		}

		return <View style={styles.Container} />;
	}
}

const styles = StyleSheet.create({
	Container: {
		width: "100%",
		minHeight: 90,
		backgroundColor: "#FFF",
		flexDirection: "row",
		marginBottom: 20,
		borderRadius: 10,
		padding: 10,
		...shadowStyle.default,
	},
	IconContainer: {
		width: 68,
		height: 68,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fadbd3",
		padding: 10,
		borderRadius: 15,
	},
	InfoContainer: {
		flex: 3,
		paddingLeft: 20,
		justifyContent: "center",
	},
	ClimateContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	WeatherImage: {
		width: 80,
		height: 80,
	},
	ClimateInfo: {
		fontWeight: "bold",
		fontSize: 20,
	},
	CityText: {
		fontSize: 20,
		fontWeight: "bold",
		marginLeft: 7,
	},
	flagImage: {
		width: 20,
		height: 15,
	},
	CityContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
});

function mapStateToProps(_state: any) {
	return {};
}

function mapDispatchToProps(dispatch: any) {
	return {
		openModal: (data: IAPIWeatherInfo) =>
			dispatch(ModalActions.openModal(data)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(
	LocationsComponent
);
