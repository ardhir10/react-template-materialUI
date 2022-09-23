import {  configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/counter/counterSlice'



export default configureStore({
    reducer: {
        counter: counterReducer
    }
})

// export default combineReducers({ potato: counterReducer, counterReducer });