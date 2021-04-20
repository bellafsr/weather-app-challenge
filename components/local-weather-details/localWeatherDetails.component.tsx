import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { IWeatherDetails } from '../../helpers/interfaces';

import LocalWeatherDetailsItemComponent from '../local-weather-details-item/localWeatherDetailsItem.component';
import { shadowStyle } from '../../helpers/styles/shadows';

interface Props {
	infoToBeRendered: IWeatherDetails[];
	hasShadow: boolean;
}

class LocalWeatherDetailsComponent extends Component<Props> {
	hasShadow() {
		if(this.props.hasShadow) {
			return shadowStyle.default;
		}
	}

	render() {
		return (
			<View style={[this.styles.Container, this.hasShadow()]}>
				{this.props.infoToBeRendered.map(
					(weatherDetail: IWeatherDetails, index: number) => {
						return (
							<LocalWeatherDetailsItemComponent
								iconName={weatherDetail.iconName}
								info={weatherDetail.info}
								key={index}
							/>
						);
					}
				)}
			</View>
		);
	}

	public styles = StyleSheet.create({
		Container: {
			height: 90,
			backgroundColor: "#FFF",
			marginTop: 20,
			borderRadius: 10,
			flexDirection: "row",
		},
		WeatherInfoContainer: {
			paddingHorizontal: 10,
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
		},
	});
}

export default LocalWeatherDetailsComponent;
