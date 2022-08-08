import { call, put, takeLatest } from "redux-saga/effects";
import cityApi from "../../api/cityApi";
import { ListResponse, City } from "../../models/index";
import { cityActions } from "./citySlice";

function* fetchCityList() {
  try {
    const response: ListResponse<City> = yield call(cityApi.getAll);
    yield put(cityActions.fetchCityListSuccess(response));
  } catch (error: any) {
    console.log(`Failed to fetch city list`, error);
    yield put(cityActions.fetchCityListFailed(error.message));
  }
}

export default function* citySaga() {
  yield takeLatest(cityActions.fetchCityList.type, fetchCityList);
}
