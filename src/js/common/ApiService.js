import Axios from "axios";
import Config from "./Config";

let call = (url, method, headers, data) => {
  return Axios({
    method: method,
    url: url,
    data,
    headers
  });
};

export default {
  init: async (route, data) => {
    let result;
    let fullUrl = Config.api.base.url + route.url;
    let method = route.method;
    let access_token = localStorage.getItem("access_token");
    let refresh_token = localStorage.getItem("refresh_token");
    var headers = { token: access_token };
    data.token = access_token;
    try {
      result = await call(fullUrl, method, headers, data);
    } catch (err) {
      if (errerr.response.status === 403) {
        let d = { refreshtoken: refresh_token };
        result = await call(`${Config.api.base.url}/auth/grant`, "post", headers, d);
        access_token = result.data;
        headers = { token: access_token };
        localStorage.setItem("access_token", access_token);
        return call(fullUrl, method, headers, data);
      }
    }
    return result;
  }
};
