import { takeEvery, put } from 'redux-saga/effects';
import API from './API';
import * as Types from '../action/actionType';

function* fetDataCustomers(action) {
    try {
        const customers = yield API.getDataCustomers;
        console.log('customers',customers);
        
        yield put({ type: Types.FETCH_DATA_CUSTOMERS_SUCCESS, customers });
    } catch (error) {
        console.log('error',error);
        yield put({ type: Types.FETCH_DATA_CUSTOMERS_FAILD, error });
    }
}

export function* customersSaga() {
    yield takeEvery(Types.GET_DATA_CUSTOMERS, fetDataCustomers);
}