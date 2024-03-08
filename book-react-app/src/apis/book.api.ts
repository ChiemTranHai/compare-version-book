import {CONTEXT_PATH_SERVICE} from "../common/constant";
import httpClient from "./http";

const PATH = {
    GET_BOOK: 'book'
}

const getUrl = (url: string) => {
    return `${window.location.origin}/${CONTEXT_PATH_SERVICE.BOOK_SERVICE}/${url}`;
}
export const test = () => {
}
export const getAllBooksApi = () => {
    return httpClient.get(getUrl(PATH.GET_BOOK));
}