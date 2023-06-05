import utils from "@/api/index.js";

export default {
  download: fileName => {
    return utils.download("get", `/api/download?fileName=${fileName}`, null);
  }
};
