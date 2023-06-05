import utils from "@/api/index.js";

export default {
  validUser: loginInfo => {
    return utils.request("post", "/api/login", loginInfo);
  },
  joinUser: loginInfo => {
    return utils.request("post", "/api/join", loginInfo);
  }
};
