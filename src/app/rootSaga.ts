import citySaga from "../features/city/citySaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([citySaga()]);
}
