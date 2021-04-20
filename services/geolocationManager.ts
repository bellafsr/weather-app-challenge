import * as Location from 'expo-location';

export class GeoLocationManager {
    public async getUserCoordinates(): Promise<void | { latitude: number; longitude: number; }> {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            console.error('Error! Location Access Was NotGranted ');
        }

        let { latitude, longitude } = await (await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Highest,
        })).coords;

        return {
            latitude,
            longitude,
        };
    }
}
