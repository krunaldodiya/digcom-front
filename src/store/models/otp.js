import { api } from "../../libs/api";
import { getInitialScreen } from "../../libs/screen";
import { makeRequest, setAuthMobile } from "../../services";

export const otp = {
  name: "otp",
  state: {
    mobile: "",
    serverOtp: "",
    clientOtp: "",
    otpVerified: false,
    errors: null
  },
  reducers: {
    handleInput(state, payload) {
      return { ...state, ...payload };
    },
    setOtp(state, payload) {
      return { ...state, ...payload };
    }
  },
  effects: dispatch => {
    return {
      async requestOtp(payload, rootState) {
        const { mobile, navigation } = payload;

        try {
          const response = await makeRequest(api.requestOtp, { mobile });
          const { data } = response;

          dispatch.otp.setOtp({ serverOtp: data.otp });
          navigation.replace("VerifyOtpScreen");
        } catch (error) {
          dispatch.otp.setOtp({ error: error.response.data });
        }
      },

      async verifyOtp(payload, rootState) {
        const { user, mobile, otp, navigation } = payload;

        try {
          await makeRequest(api.verifyOtp, { mobile, otp });
          await setAuthMobile(mobile);

          navigation.replace(getInitialScreen(user, mobile));
        } catch (error) {
          dispatch.otp.setOtp({ error: error.response.data });
        }
      }
    };
  }
};
