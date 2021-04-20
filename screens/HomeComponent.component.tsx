import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { LinearGradient } from "expo-linear-gradient";

import * as InitialActions from '../store/actions/InitialActions';

import CitiesDetailsDialogComponent from "../components/cities-details-dialog/citiesDetailsDialog.component";
import FavoriteLocationComponent from "../components/favorite-locations/favoriteLocations.component";
import LocalWeatherComponent from "../components/local-weather/localWeather.component";

import { IAPIWeatherInfo } from "../helpers/interfaces";
import { WeatherList } from "../helpers/enums";

interface IComponentProps {
	setUserWeatherInfo(): void;
	saveTheme(userMainWeather: WeatherList): void;
	getFavListsInformation(favCities: number[]): void;
	userWeatherInfo?: IAPIWeatherInfo;
	themeColor?: string[];
}

class HomeComponent extends Component<IComponentProps> {
	favCities: number[] = [
		2267057,
		3117735,
		2988507,
		2950159,
		2618425,
		3169070,
		2643743,
		2964574,
		3067696,
		2761369,
	];

	componentDidMount() {
		this.props.setUserWeatherInfo();
		this.props.getFavListsInformation(this.favCities);

		setInterval(() => {
			this.props.setUserWeatherInfo();
			this.props.getFavListsInformation(this.favCities);
		}, 40000);
	}

	render() {
		return (
			<ScrollView>
				<LinearGradient
					colors={this.props.themeColor!}
					style={this.styles.Container}
				>
					<LocalWeatherComponent />
					<FavoriteLocationComponent />
					<CitiesDetailsDialogComponent />
				</LinearGradient>
			</ScrollView>
		);
	}

	public styles = StyleSheet.create({
		Container: {
			height: "100%",
			padding: 30,
		},
	});
}

const mapStateToProps = (state: any) => ({
	userWeatherInfo: state.userWeatherInfo,
	themeColor: state.userTheme.colorScheme,
});

function mapDispatchToProps(dispatch: any) {
	return {
		setUserWeatherInfo: () => dispatch(InitialActions.userWeatherInfo()),
		saveTheme: (userMainWeather: WeatherList) =>
			dispatch(InitialActions.saveTheme(userMainWeather)),
		getFavListsInformation: (favCities: number[]) =>
			dispatch(InitialActions.getFavListsInformation(favCities)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
