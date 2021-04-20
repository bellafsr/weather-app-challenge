import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { saveTheme } from './actions/InitialActions';

const INITIAL_STATE = {
    isDialogOpen: false,
    userTheme: {
        icon: "weather-cloudy-alert",
        colorScheme: ["#7CB0BE", "#6F74A0"],
    },
    favoriteCities: [],
    favoriteCitySelected: {
        name: '',
        data: [],
    },
    userWeatherInfo: {
        name: '',
        main: {
            temp: 0,
            temp_min: 0,
            temp_max: 0,
            humidity: 0,
        },
        weather: [
            {
                description: '',
                icon: '',
            },
        ],
        wind: {
            speed: 0,
        }
    },
};

const customMiddleWare = (store: any) => (next: any) => (action: any) => {
    if (action.type === 'GET_USER_WEATHER_FULFILLED') {
        setTimeout(() => {
            store.dispatch(saveTheme(store.getState().userWeatherInfo.weather[0].main));
        }, 1000);
    }

    next(action);
}

function reducer(state = INITIAL_STATE, action: any) {
    if (action.type === 'GET_USER_WEATHER_FULFILLED') {
        return {
            ...state,
            userWeatherInfo: action.payload,
        };
    }

    if (action.type === 'OPEN_MODAL') {
        return {
            ...state,
            isDialogOpen: true,
            favoriteCitySelected: action.payload,
        };
    }

    if (action.type === 'CLOSE_MODAL') {
        return {
            ...state,
            isDialogOpen: false,
            favoriteCitySelected: {
                name: '',
                data: [],
            },
        };
    }

    if (action.type === 'ADD_CITY_INFO_FAVLIST_FULFILLED') {
        return {
            ...state,
            favoriteCities: action.payload.list,
        };
    }

    if (action.type === 'ADD_THEME') {
        return {
            ...state,
            userTheme: action.payload,
        }
    }

    return state;
}

const store: any = createStore(reducer, INITIAL_STATE, applyMiddleware(customMiddleWare, promise, thunk));

export default store;
