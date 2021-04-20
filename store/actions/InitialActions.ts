import { WeatherList } from "../../helpers/enums";
import { setCorrectTheme } from "../../helpers/theme";
import { RequestManager } from "../../services/requestManager";

const requestManager = new RequestManager();

export const userWeatherInfo = () => async (dispatch: any) => {
    await dispatch({
        type: 'GET_USER_WEATHER',
        payload: requestManager.getClimateInfoByCoordinate(),
    });
}

export const getFavListsInformation = (favCities: number[]) => async (dispatch: any) => {
    dispatch({
        type: 'ADD_CITY_INFO_FAVLIST',
        payload: requestManager.requestClimateInfo(favCities),
    });
}

export const saveTheme = (mainWeather: WeatherList) => async (dispatch: any) => {
    const theme = setCorrectTheme(mainWeather);

    dispatch({
        type: 'ADD_THEME',
        payload: theme,
    });
}
