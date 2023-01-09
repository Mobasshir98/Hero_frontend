import {configureStore} from '@reduxjs/toolkit';
import { adminReducer } from './reducers/adminReducer';
import { courseReducer } from './reducers/courseReducer';
import { authReducer } from './reducers/userReducer';


const store= configureStore({
    reducer:{
        user:authReducer,
        course:courseReducer,
        admin:adminReducer
    }
})


export const server = "https://hero-vired.onrender.com/api/v1";
export default store;