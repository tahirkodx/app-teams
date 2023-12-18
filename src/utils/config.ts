// import getConfig from "next/config";
// const { publicRuntimeConfig } = getConfig();

// const CONFIG = {
//   BASE_URL: publicRuntimeConfig.BASE_URL,
// };

// export default CONFIG;
var siteurl = ''
if (import.meta.env.DEV) {
  siteurl = 'http://localhost:8000/'
  siteurl = 'https://epicus-395019.ew.r.appspot.com/'
} else {
  siteurl = 'https://epicus-395019.ew.r.appspot.com/'
}
const CONFIG = {
  BASE_URL: siteurl,
};
export default CONFIG;
