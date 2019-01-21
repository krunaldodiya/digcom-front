import { httpUrl } from "./vars";

const resource = {
  web: {
    createOrder: `${httpUrl}/payments/create-order`,
    processOrder: `${httpUrl}/payments/process-order`,
    orderResponse: `${httpUrl}/payments/order-response`,
    terms: `${httpUrl}/terms`
  },
  api: {
    getCommunities: `${httpUrl}/api/communities/get`,
    selectCommunity: `${httpUrl}/api/communities/select`,
    skipCommunity: `${httpUrl}/api/communities/skip`,
    requestOtp: `${httpUrl}/api/otp/request-otp`,
    verifyOtp: `${httpUrl}/api/otp/verify-otp`,
    me: `${httpUrl}/api/users/me`,
    getUserById: `${httpUrl}/api/users/id`,
    updateUserContacts: `${httpUrl}/api/users/contacts/update`,
    updateUserProfile: `${httpUrl}/api/users/profile/update`,
    getMembers: `${httpUrl}/api/family/all`,
    removeMember: `${httpUrl}/api/family/remove`,
    addMember: `${httpUrl}/api/family/add`,
    updateMember: `${httpUrl}/api/family/update`,
    searchDirectory: `${httpUrl}/api/directory/search`,
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
