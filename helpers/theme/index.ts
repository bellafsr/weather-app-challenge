import { WeatherList } from "../enums";

export function setCorrectTheme(weatherCondition: WeatherList): any {
    if (weatherCondition === WeatherList.Clear) {
        return {
            icon: "weather-sunny",
            colorScheme: ["#F7CD77", "#E09788"],
        };
    }

    if (weatherCondition === WeatherList.Thunderstorm) {
        return {
            icon: "weather-lightning",
            colorScheme: ["#2B526F", "#47437B"],
        };
    }

    if (
        weatherCondition === WeatherList.Drizzle ||
        weatherCondition === WeatherList.Rain
    ) {
        return {
            icon: "weather-pouring",
            colorScheme: ["#2B526F", "#47437B"],
        };
    }

    if (weatherCondition === WeatherList.Snow) {
        return {
            icon: "weather-snowy",
            colorScheme: ["#7CB0BE", "#6F74A0"],
        };
    }

    if (weatherCondition === WeatherList.Atmosphere) {
        return {
            icon: "weather-fog",
            colorScheme: ["#2B526F", "#47437B"],
        };
    }

    if (weatherCondition === WeatherList.Clouds) {
        return {
            icon: "weather-cloudy",
            colorScheme: ["#7CB0BE", "#6F74A0"],
        };
    }

    return {
        icon: "weather-cloudy-alert",
        colorScheme: ["#7CB0BE", "#6F74A0"],
    };
}
