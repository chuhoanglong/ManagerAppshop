import { takeEvery, put } from 'redux-saga/effects';
import * as API from './API';
import * as Types from '../action/actionType';

function* fetchDataProduct(action) {
    try {
        const products = yield API.getDataProducts();
        
        yield put({ type: Types.FETCH_DATA_PRODUCT_SUCCESS, products });
        console.log('products',products);
    } catch (error) {
        console.log('error productSaga',error);

        yield put({ type: Types.FETCH_DATA_PRODUCT_FALID, error });
    }
}

export function* productSaga() {
    yield takeEvery(Types.GET_DATA_PRODUCT, fetchDataProduct);
}

