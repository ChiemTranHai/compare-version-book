import { all } from 'redux-saga/effects'
import bookSaga from "./book.saga";
function* rootSaga() {
    yield all([
        bookSaga()
    ])
}

export default rootSaga;