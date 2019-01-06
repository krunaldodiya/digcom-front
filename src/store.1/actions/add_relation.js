const ADD_RELATION = "ADD_RELATION";
const ADD_RELATION_SUCCESS = "ADD_RELATION_SUCCESS";
const ADD_RELATION_FAIL = "ADD_RELATION_FAIL";

const addRelation = payload => {
  return {
    type: ADD_RELATION,
    payload
  };
};

const addRelationSuccess = payload => {
  return {
    type: ADD_RELATION_SUCCESS,
    payload
  };
};

const addRelationFail = payload => {
  return {
    type: ADD_RELATION_FAIL,
    payload
  };
};

export {
  ADD_RELATION,
  ADD_RELATION_SUCCESS,
  ADD_RELATION_FAIL,
  addRelation,
  addRelationSuccess,
  addRelationFail
};
