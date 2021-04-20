import { StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import useCachedResources from './hooks/useCachedResources';
import HomeComponent from './screens/HomeComponent.component';

import store from './store';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
		<StoreProvider store={store}>
			<SafeAreaProvider>
				<PaperProvider>
					<HomeComponent />
				</PaperProvider>
			</SafeAreaProvider>
		</StoreProvider>
	);
  }
}
