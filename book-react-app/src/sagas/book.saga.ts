import {AxiosResponse} from "axios";
import {call, put, takeLatest} from "redux-saga/effects";
import {getAllBooks, getAllBooksError, getAllBooksSuccess} from "../slices/book.slice";
import {getAllBooksApi} from "../apis/book.api";
import {BookResponse} from "../types/book.types";

function* getAllBooksAsync() {
    try {
        const response:Array<BookResponse> = yield call(getAllBooksApi);
        yield put(getAllBooksSuccess(response))
    } catch (error) {
        yield put(getAllBooksError());
    }
}
function* bookSaga() {
    yield takeLatest(getAllBooks, getAllBooksAsync);
}
export default bookSaga;