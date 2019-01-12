import { httpUrl } from "./vars";

const resource = {
  web: {
    createOrder: `${httpUrl}/payments/create-order`,
    processOrder: `${httpUrl}/payments/process-order`,
    orderResponse: `${httpUrl}/payments/order-response`,
    terms: `${httpUrl}/terms`
  },
  api: {
    getCommunities: `${httpUrl}/api/communities`,
    addCommunity: `${httpUrl}/api/communities/add`,
    requestOtp: `${httpUrl}/api/otp/request-otp`,
    verifyOtp: `${httpUrl}/api/otp/verify-otp`,
    me: `${httpUrl}/api/users/me`,
    getUserById: `${httpUrl}/api/users/id`,
    updateUserProfile: `${httpUrl}/api/users/profile/update`,
    getUsers: `${httpUrl}/api/users/all`,
    switchMember: `${httpUrl}/api/family/add`,
    addMember: `${httpUrl}/api/family/switch`,
    wallet: `${httpUrl}/api/wallet/info`,
    changeAvatar: `${httpUrl}/api/avatar/change`,
    requestRelation: `${httpUrl}/api/relation/request`,
    setMobileStatus: `${httpUrl}/api/settings/set-mobile-status`,
    setBirthdayStatus: `${httpUrl}/api/settings/set-birthday-status`,
    deleteAccount: `${httpUrl}/api/settings/delete-account`,
    changeMobile: `${httpUrl}/api/settings/change-mobile`
  }
};

const { api, web } = resource;

export { web, api };
