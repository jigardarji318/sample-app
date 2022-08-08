import React, { useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { cityActions, selectCityList } from "./citySlice";

export function City() {
  // omit rendering logic

  const dispatch = useAppDispatch();
  const cityList = useAppSelector(selectCityList);

  useEffect(() => {
    dispatch(cityActions.fetchCityList());
  }, [dispatch]);

  console.log("city", cityList);

  return (
    <>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Code</th>
            </tr>
            {cityList?.map((val, idx) => (
              <tr key={idx}>
                <td>{val.code}</td>
                <td>{val.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
