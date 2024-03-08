import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {BookState, getAllBooks} from "./slices/book.slice";
import {RootState} from "./stores";

function App() {
    const dispatch = useDispatch();
    const {books} = useSelector((state: RootState) => state.book as BookState);
    useEffect(() => {
        console.log('vo day 2 lan')
        dispatch(getAllBooks());
    }, []);

    useEffect(() => {
        console.log('books ne ', books)
    }, [books])
    return (
        <div className="App">
            hello world
        </div>
    );
}

export default App;
