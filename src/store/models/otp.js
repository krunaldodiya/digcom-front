import { api } from "../../libs/api";
import { getInitialScreen } from "../../libs/screen";
import { makeRequest, setAuthToken } from "../../services";

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
        const { mobile, otp, navigation } = payload;

        try {
          const response = await makeRequest(api.verifyOtp, {
            mobile,
            otp
          });

          const { data } = response;
          const { user, token } = data;

          dispatch.auth.setAuthUser({ authUser: user });
          await setAuthToken(token);

          navigation.replace(getInitialScreen(user));
        } catch (error) {
          dispatch.otp.setOtp({ error: error.response.data });
        }
      }
    };
  }
};
