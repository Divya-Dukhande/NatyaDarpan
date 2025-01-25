import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";



//manually sgla store nhi krayla, toolkit aplyala krun dael
const store = configureStore({
    reducer : { //jevde pn yenar hecha aat yenar ani te as a global reducer work krnar
        auth : authReducer,
    },
});

export default Store;