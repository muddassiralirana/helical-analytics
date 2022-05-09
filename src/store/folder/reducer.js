import {
  ADD_FOLDER_SUCCESS,
  ADD_FOLDER_FAILED,
  GET_FOLDERS_REQUEST,
  GET_FOLDERS_SUCCESS,
  GET_FOLDERS_FAILED,
  CREATE_FOLDER_SUCCESS,
  CREATE_FOLDER_FAILED,
} from "./actionTypes";

const INIT_STATE = {
  loading: null,
  folders: [],
  error: null,
  folder: null,
};

const Folder = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_FOLDERS_REQUEST:
      return { loading: true };
    case GET_FOLDERS_SUCCESS:
      return { loading: false, folders: action.payload };
    case GET_FOLDERS_FAILED:
      return { loading: false, error: action.payload };
    case CREATE_FOLDER_SUCCESS:
      return { loading: false, folders: [...state.folders, action.payload] };
    case CREATE_FOLDER_FAILED:
      return { loading: false, error: action.payload };
    case ADD_FOLDER_SUCCESS:
      return { loading: false, folder: action.payload };
    case ADD_FOLDER_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default Folder;
