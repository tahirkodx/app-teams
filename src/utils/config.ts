// import getConfig from "next/config";
// const { publicRuntimeConfig } = getConfig();

// const CONFIG = {
//   BASE_URL: publicRuntimeConfig.BASE_URL,
// };

// export default CONFIG;
var siteurl = ''
if (import.meta.env.DEV) {
  siteurl = 'http://localhost:8000/'
  siteurl = 'https://dev.api.epicus.ai'
} else {
  siteurl = 'https://dev.api.epicus.ai'
}
const CONFIG = {
  BASE_URL: siteurl,
};
export default CONFIG;
