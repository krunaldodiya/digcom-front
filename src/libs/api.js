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
    switchMember: `${httpUrl}/api/users/add`,
    addMember: `${httpUrl}/api/users/switch`,
    updateUserProfile: `${httpUrl}/api/users/profile/update`,
    getUsersByMobile: `${httpUrl}/api/users/mobile`,
    getUsers: `${httpUrl}/api/users/all`,
    wallet: `${httpUrl}/api/wallet/info`,
    changeAvatar: `${httpUrl}/api/avatar/change`,
    requestRelation: `${httpUrl}/api/relation/request`,
    setMobileStatus: `${httpUrl}/api/settings/set-mobile-status`,
    setBirthdayStatus: `${httpUrl}/api/settings/set-birthday-status`,
    updateAadhaarCard: `${httpUrl}/api/settings/update-aadhaar-card`,
    deleteAccount: `${httpUrl}/api/settings/delete-account`,
    updateSecondaryMobile: `${httpUrl}/api/settings/update-secondary-mobile`
  }
};

const { api, web } = resource;

export { web, api };
