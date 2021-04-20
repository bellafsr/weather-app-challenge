import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { IWeatherDetails } from '../../helpers/interfaces';

const LocalWeatherDetailsItemComponent: React.FC<IWeatherDetails> = (
	props: IWeatherDetails
) => {
	return (
		<View style={styles.WeatherInfoContainer}>
			<Icon
				name={props.iconName}
				size={30}
				color="#ea5b35"
				style={styles.Icon}
			/>
			<Text>{props.info}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
    WeatherInfoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Icon: {
        marginBottom: 7,
    },
});

export default LocalWeatherDetailsItemComponent;
