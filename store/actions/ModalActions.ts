import { IAPIWeatherInfo, IWeatherDetails } from "../../helpers/interfaces";

export const openModal = (data: IAPIWeatherInfo) => (dispatch: any) => {
    const formatData: IWeatherDetails[] = [
        {
            iconName: 'weather-windy',
            info: data.wind!.speed + 'Km/h',
        },
        {
            iconName: 'weather-sunset-down',
            info: data.main!.temp_min + '°C',
        },
        {
            iconName: 'weather-sunset-up',
            info: data.main!.temp_max + '°C',
        },
        {
            iconName: 'water-outline',
            info: data.main!.humidity + '%',
        },
    ]

    dispatch({
        type: 'OPEN_MODAL',
        payload: {
            data: formatData,
            name: data.name,
            temp: data.main?.temp,
            flag: data.sys?.country.toLocaleLowerCase(),
        },
    });
}

export const closeModal = () => async (dispatch: any) => {
    dispatch({
        type: 'CLOSE_MODAL',
    });
}
