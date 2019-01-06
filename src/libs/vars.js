const httpUrlDev = "http://192.168.2.200:8000";
const wsUrlDev = "ws://192.168.2.200:8000";

const httpUrlProd = "https://marusamaj.tk";
const wsUrlProd = "ws://marusamaj.tk";

const httpUrl = __DEV__ ? httpUrlDev : httpUrlProd;
const wsUrl = __DEV__ ? wsUrlDev : wsUrlProd;

// const httpUrl = httpUrlProd;
// const wsUrl = wsUrlProd;

export { httpUrl, wsUrl };
