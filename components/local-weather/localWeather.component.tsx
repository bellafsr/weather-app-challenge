import * as React from "react";

import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import moment from "moment";

import LocalWeatherDetailsComponent from "../local-weather-details/localWeatherDetails.component";
import { IAPIWeatherInfo, IWeatherDetails } from "../../helpers/interfaces";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function getDetails(userWeatherInfo: IAPIWeatherInfo): IWeatherDetails[] {
	return [
		{
			iconName: "weather-windy",
			info: userWeatherInfo.wind?.speed + "Km/h",
		},
		{
			iconName: "weather-sunset-down",
			info: userWeatherInfo.main?.temp_min + "°C",
		},
		{
			iconName: "weather-sunset-up",
			info: userWeatherInfo.main?.temp_max + "°C",
		},
		{
			iconName: "water-outline",
			info: userWeatherInfo.main?.humidity + "%",
		},
	];
};

const LocalWeatherComponent = ({
	userWeatherInfo,
	userThemeIcon,
}: {
	userWeatherInfo: IAPIWeatherInfo;
	userThemeIcon: string;
}) => {
	return (
		<>
			<View style={styles.Container}>
				<View style={styles.WeatherInfo}>
					<Text style={styles.DateText}>
						{ moment().format('LL')	}
					</Text>
					<Text style={styles.CityText}>{userWeatherInfo.name}</Text>
					<Text style={styles.ClimateText}>
						{Math.floor(userWeatherInfo.main!.temp)}°C
					</Text>
					<Text style={styles.WeatherText}>
						{userWeatherInfo.weather![0].description}
					</Text>
				</View>
				<View style={styles.WeatherImageContainer}>
					<Icon name={userThemeIcon} size={140} color="#FFF"></Icon>
				</View>
			</View>
			<LocalWeatherDetailsComponent
				infoToBeRendered={getDetails(userWeatherInfo)}
				hasShadow={true}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	Container: {
		flexDirection: 'row',
		height: 300,
	},
	WeatherInfo: {
		flex: 1,
		justifyContent: "space-evenly",
		marginTop: 20,
	},
	WeatherImageContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 20,
	},
	ClimateText: {
		fontSize: 50,
		fontWeight: "bold",
		color: "#FFF",
	},
	CityText: {
		color: "#FFF",
		fontSize: 15,
		fontWeight: "bold",
		marginTop: -40,
	},
	WeatherText: {
		color: "#FFF",
		fontSize: 15,
		fontWeight: "bold",
		marginTop: -40,
	},
	DateText: {
		color: "#FFF",
		fontSize: 15,
	},
});

export default connect((state: any) => ({
	userWeatherInfo: state.userWeatherInfo,
	userThemeIcon: state.userTheme.icon,
}))(LocalWeatherComponent);
