import {call, put, takeEvery} from 'redux-saga/effects';
import {getExample, getExampleError, getExampleSuccess} from "../slices/sample.slice";
import {getExampleApi} from "../apis/example.api";
import {AxiosResponse} from "axios";

function* getExampleAsync() {
    try {
        const response:AxiosResponse<any> = yield call(getExampleApi);
        yield put(getExampleSuccess(response.data))
    } catch (error) {
        yield put(getExampleError());
    }
}

function* exampleSaga() {
    yield takeEvery(getExample, getExampleAsync);
}

export default exampleSaga;