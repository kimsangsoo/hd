import axios from "axios";

const request = (method, url, data) => {
  return axios({
    method,
    url,
    headers: { "Content-Type": "application/json" },
    data
  }).then(result => {
    return result.data;
  });
};

const download = (method, url, data) => {
  return axios({
    method,
    url,
    headers: { responseType: "blob" },
    data
  }).then(result => {
    const url = window.URL.createObjectURL(new Blob([result.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "file.txt");
    document.body.appendChild(link);
    link.click();
  });
};

export default {
  request: request,
  download: download
};
