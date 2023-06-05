import utils from "@/api/index.js";

export default {
  getFileList: id => {
    return utils.request("get", `/api/file?id=${id}`);
  },
  getSharedFileList: id => {
    return utils.request("get", `/api/shared/file?id=${id}`);
  },
  getFolderList: id => {
    return utils.request("get", `/api/folder?id=${id}`);
  },
  deleteFile: file => {
    return utils.request("post", "/api/delete", file);
  },
  getDeletedFileList: id => {
    return utils.request("get", `/api/deleted/file?id=${id}`);
  },
  setEmptyTrash: id => {
    return utils.request("get", `/api/empty/trash?id=${id}`);
  }
};
