import {
  GET_STUDY_REQUEST,
  GET_STUDY_SUCCESS,
  GET_STUDY_FAILED,
} from "./actionTypes";

const INIT_STATE = {
  loading: null,
  study: [],
  error: null,
};

const Study = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_STUDY_REQUEST:
      return { loading: true };
    case GET_STUDY_SUCCESS:
      return { loading: false, study: action.payload };
    case GET_STUDY_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default Study;
