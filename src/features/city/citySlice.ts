import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { City, ListResponse } from "../../models/";
import { RootState } from "../../app/store";

export interface CityState {
  loading: boolean;
  list: City[];
}

const initialState: CityState = {
  loading: false,
  list: [],
};

const citySlice = createSlice({
  name: "city",
  initialState: initialState,
  reducers: {
    fetchCityList(state: { loading: boolean }) {
      state.loading = true;
    },
    fetchCityListSuccess(
      state: { loading: boolean; list: City[] },
      action: PayloadAction<ListResponse<City>>
    ) {
      state.loading = false;
      state.list = action.payload.data;
    },
    fetchCityListFailed(
      state: { loading: boolean },
      action: PayloadAction<string>
    ) {
      state.loading = false;
      console.log(action);
    },
  },
});

// Actions
export const cityActions = citySlice.actions;

// Selectors
export const selectCityLoading = (state: RootState) => state?.city.loading;
export const selectCityList = (state: RootState) => state?.city.list;
// export const selectCityMap = createSelector(selectCityList, (cityList) =>
//   cityList.reduce(
//     (
//       map: {
//         [key: string]: City;
//       },
//       city: City
//     ) => {
//       map[city.code] = city;
//       return map;
//     },
//     {}
//   )
// );
// export const selectCityOption = createSelector(selectCityList, (cityList) =>
//   cityList.map((city: { name: any; code: any }) => ({
//     label: city.name,
//     value: city.code,
//   }))
// );

// Reducer
const cityReducer = citySlice.reducer;
export default cityReducer;
