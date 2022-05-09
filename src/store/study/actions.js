import {
  GET_STUDY_REQUEST,
  GET_STUDY_SUCCESS,
  GET_STUDY_FAILED,
} from "./actionTypes";
import { apiClient } from "../../helpers/apiRequest";

export const getStudy = () => async (dispatch) => {
  dispatch({ type: GET_STUDY_REQUEST });

  const { data, error } = await apiClient.get("/study");

  if (error) {
    return dispatch({ type: GET_STUDY_FAILED, payload: error });
  }

  return dispatch({ type: GET_STUDY_SUCCESS, payload: data.data });
};
