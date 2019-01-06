const UPDATE_SETTINGS = "UPDATE_SETTINGS";
const UPDATE_SETTINGS_SUCCESS = "UPDATE_SETTINGS_SUCCESS";
const UPDATE_SETTINGS_FAIL = "UPDATE_SETTINGS_FAIL";

const updateSettings = payload => {
  return {
    type: UPDATE_SETTINGS,
    payload
  };
};

const updateSettingsSuccess = payload => {
  return {
    type: UPDATE_SETTINGS_SUCCESS,
    payload
  };
};

const updateSettingsFail = payload => {
  return {
    type: UPDATE_SETTINGS_FAIL,
    payload
  };
};

export {
  UPDATE_SETTINGS,
  UPDATE_SETTINGS_SUCCESS,
  UPDATE_SETTINGS_FAIL,
  updateSettings,
  updateSettingsSuccess,
  updateSettingsFail
};
