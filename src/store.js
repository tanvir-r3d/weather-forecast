import {configureStore} from "@reduxjs/toolkit";
import temperatureReducer from "./Slices/temperatureSlice";

export default configureStore({
    reducer: {
        temperature: temperatureReducer,
    },
});