import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";

  
//this for redux on chroom or edig
// const enhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

// const store = createStore(counterReducer , enhance(applyMiddleware(reduxThunk)));

const store = configureStore({
    reducer : {
        user : userSlice
    }
});
export default store
