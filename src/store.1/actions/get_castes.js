const GET_CASTES = "GET_CASTES";
const GET_CASTES_SUCCESS = "GET_CASTES_SUCCESS";
const GET_CASTES_FAIL = "GET_CASTES_FAIL";

const getCastes = payload => {
  return {
    type: GET_CASTES,
    payload
  };
};

const getCastesSuccess = payload => {
  return {
    type: GET_CASTES_SUCCESS,
    payload
  };
};

const getCastesFail = payload => {
  return {
    type: GET_CASTES_FAIL,
    payload
  };
};

export {
  GET_CASTES,
  GET_CASTES_SUCCESS,
  GET_CASTES_FAIL,
  getCastes,
  getCastesSuccess,
  getCastesFail
};
