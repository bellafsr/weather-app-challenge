import * as React from 'react';
import { Paragraph, Dialog, Portal, Title } from 'react-native-paper';
import { connect } from 'react-redux';
import { Image, View, StyleSheet } from "react-native";

import * as ModalActions from '../../store/actions/ModalActions';

import LocalWeatherDetailsComponent from '../local-weather-details/localWeatherDetails.component';

const CitiesDetailsDialogComponent = ({ dialogInfo, dispatch }: any) => {

	const hideDialog = () => {
		dispatch(ModalActions.closeModal());
	};

	return (
		<Portal>
			<Dialog visible={dialogInfo.isDialogOpen} onDismiss={hideDialog}>
				<Dialog.Content>
					<View style={styles.cityContainer}>
						<Image
							style={styles.flagImage}
							source={{
								uri: `http://openweathermap.org/images/flags/${dialogInfo.favoriteCitySelected.flag}.png`,
							}}
						/>
						<Title>{dialogInfo.favoriteCitySelected.name}</Title>
					</View>
					<LocalWeatherDetailsComponent
						infoToBeRendered={dialogInfo.favoriteCitySelected.data}
						hasShadow={false}
					/>
				</Dialog.Content>
			</Dialog>
		</Portal>
	);
};

const styles = StyleSheet.create({
	flagImage: {
		width: 20,
		height: 15,
		marginRight: 10,
	},
	cityContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	}
});

export default connect((state: any) => ({
	dialogInfo: {
    favoriteCitySelected: state.favoriteCitySelected,
    isDialogOpen: state.isDialogOpen,
  },
}))(CitiesDetailsDialogComponent);
