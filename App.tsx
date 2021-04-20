import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as StoreProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import Constants from "expo-constants";

import useCachedResources from "./hooks/useCachedResources";
import HomeComponent from "./screens/HomeComponent.component";

import store from "./store";

function checkIfIsOnEmulator() {
	if (!Constants.isDevice) {
		return (
			<View
				style={{
					height: "100%",
					alignItems: "center",
					justifyContent: "center",
					paddingHorizontal: 30,
				}}
			>
				<Text style={{ fontSize: 20 }}>
					Oops, this will not work on Snack in an Android/Iphone
					emulator. Try it on your device!
				</Text>
			</View>
		);
	}
	return <HomeComponent />;
}

export default function App() {
	const isLoadingComplete = useCachedResources();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<StoreProvider store={store}>
				<SafeAreaProvider>
					<PaperProvider>{checkIfIsOnEmulator()}</PaperProvider>
				</SafeAreaProvider>
			</StoreProvider>
		);
	}
}
