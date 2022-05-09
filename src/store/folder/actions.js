import {
  ADD_FOLDER_SUCCESS,
  ADD_FOLDER_FAILED,
  GET_FOLDERS_REQUEST,
  GET_FOLDERS_SUCCESS,
  GET_FOLDERS_FAILED,
  CREATE_FOLDER_FAILED,
  CREATE_FOLDER_SUCCESS,
} from "./actionTypes";
import { apiClient } from "../../helpers/apiRequest";

export const addFolder = (formData) => async (dispatch) => {
  const { data, error } = await apiClient.post("/folder/upload", formData);

  if (error) {
    return dispatch({ type: ADD_FOLDER_FAILED, payload: error });
  }

  return dispatch({ type: ADD_FOLDER_SUCCESS, payload: data });
};

export const getFolders = () => async (dispatch) => {
  dispatch({ type: GET_FOLDERS_REQUEST });

  const { data, error } = await apiClient.get("/folder");

  if (error) {
    return dispatch({ type: GET_FOLDERS_FAILED, payload: error });
  }

  return dispatch({ type: GET_FOLDERS_SUCCESS, payload: data.data });
};

export const createNewFolder = (dataToSend) => async (dispatch) => {
  console.log(dataToSend);
  const { data, error } = await apiClient.post("/folder", dataToSend);

  if (error) {
    return dispatch({ type: CREATE_FOLDER_FAILED, payload: error });
  }
  console.log(data);
  return dispatch({ type: CREATE_FOLDER_SUCCESS, payload: data });
};
