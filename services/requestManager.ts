import { IAPIWeatherInfo } from '../helpers/interfaces';
import { GeoLocationManager } from './geolocationManager';

export class RequestManager {
    protected geolocationManager: GeoLocationManager = new GeoLocationManager();
    protected apiKey: string = '1ab86a1a009627ed06676b845ac1a8e6';
    protected language: string = 'pt';
    protected units: string = 'metric';
    protected baseURL: string = 'http://api.openweathermap.org/data/2.5/';

    public async requestClimateInfo(
        parameters: number[]
    ): Promise<IAPIWeatherInfo> {
        const apiHttp: string = `group?id=${parameters}`;
        return await this.getApiResponse(apiHttp);
    }

    public async getClimateInfoByCoordinate(): Promise<IAPIWeatherInfo> {
        const userCoordinate: any = await this.geolocationManager.getUserCoordinates();
        const apiHttp: string = `weather?lat=${userCoordinate.latitude}&lon=${userCoordinate.longitude}`;

        return await this.getApiResponse(apiHttp);
    }

    protected async getApiResponse(apiParameters: string): Promise<IAPIWeatherInfo> {
        return await fetch(
            `${this.baseURL}${apiParameters}&units=${this.units}&lang=${this.language}&appid=${this.apiKey}`).then(response => response.json());
    }
}
