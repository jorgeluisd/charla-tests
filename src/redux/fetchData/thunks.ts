import {fetchDataFailure, fetchDataStart, fetchDataSuccess} from "./fetchDataSlice";
import {Dispatch} from "redux";

export const fetchData = (url: string) => async (dispatch: any) => {
  dispatch(fetchDataStart());
  try {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(fetchDataSuccess(data));
  } catch (error: any) {
    dispatch(fetchDataFailure(error.toString()));
  }
};
