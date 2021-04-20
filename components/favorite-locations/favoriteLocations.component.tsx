import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { connect } from "react-redux";

import FavoriteLocationCardComponent from "../favorite-locations-card/favoriteLocationsCard.component";

import { IAPIWeatherInfo } from "../../helpers/interfaces";

const FavoriteLocationComponent = ({ favoriteCities }: any) => {
	return (
		<View style={styles.Container}>
			<Text style={styles.SectionTitle}>Meus Locais Favoritos</Text>
			{favoriteCities.map((city: IAPIWeatherInfo, index: number) => {
				return (
					<FavoriteLocationCardComponent
						key={index}
						city={city}
					/>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	SectionTitle: {
		fontWeight: "bold",
		marginVertical: 30,
		fontSize: 17,
		color: '#FFF',
	},
	Container: {
		marginBottom: 70,
	},
});

export default connect((state: any) => ({
	favoriteCities: state.favoriteCities,
}))(FavoriteLocationComponent);
