import {createSlice} from "@reduxjs/toolkit";
import {CELSIUS, FAHRENHEIT} from "../config";

export const temperatureSlice = createSlice({
    name: 'temperature',
    initialState: {
        value: CELSIUS,
    },
    reducers: {
        convertFahrenheit: (state) => {
            state.value = FAHRENHEIT;
        },
        convertCelsius: (state) => {
            state.value = CELSIUS;
        }
    },
});

export const {convertFahrenheit, convertCelsius} = temperatureSlice.actions;

export default temperatureSlice.reducer;