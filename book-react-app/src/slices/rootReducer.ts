import {combineReducers} from '@reduxjs/toolkit';
import bookSlice from "./book.slice";

const rootReducer = combineReducers({
    book: bookSlice
})

export default rootReducer;