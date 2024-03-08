import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BookResponse} from "../types/book.types";

export interface BookState {
    books: Array<BookResponse>
    loading: boolean
}

const initialState: BookState = {
    books: [],
    loading: false
}
const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        getAllBooks: (state) => {
            state.loading = true;
        },
        getAllBooksSuccess: (state, action: PayloadAction<Array<BookResponse>>) => {
            state.loading = false;
            state.books = action.payload;
        },
        getAllBooksError: (state) => {
            state.loading = false;
        },
    }
})

const bookReducer = bookSlice.reducer;
export const {
    getAllBooks,
    getAllBooksSuccess,
    getAllBooksError
} = bookSlice.actions;
export default bookReducer