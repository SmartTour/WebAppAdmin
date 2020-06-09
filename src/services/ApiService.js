import axios from "axios";
import { urlWebApi } from "@/assets/config.json";

const baseURL = urlWebApi;
var authorizationString = "";
const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 5000
});
const apiClientForFile = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data"
  },
  timeout: 10000
});
const FormData = require("form-data");
export default {
  setToken(token) {
    let authorization = "Bearer " + token;

    apiClient.defaults.headers.common["Authorization"] = authorization;
    apiClientForFile.defaults.headers.common["Authorization"] = authorization;
    authorizationString = authorization;
  },
  login(credentials) {
    console.log(credentials);
    return apiClient.post("/users/login", credentials);
  },
  modifyUser(userData) {
    return apiClient.put("/users/me", userData);
  },
  getAgency() {
    return apiClient.get("/agencies/mine");
  },
  modifyAgency(agencyData) {
    return apiClient.put("/agencies/mine", agencyData);
  },

  //for entity
  getEntities(resource) {
    return apiClient.get("/" + resource);
  },
  getEntitiesFiltered(resource, params) {
    return apiClient.get("/" + resource + "?" + params);
  },
  getEntityById(resource, id) {
    return apiClient.get("/" + resource + "/" + id);
  },
  addEntity(resource, entity) {
    return apiClient.post("/" + resource, entity);
  },
  modifyEntity(resource, entity) {
    return apiClient.put("/" + resource + "/" + entity.id, entity);
  },
  deleteEntityById(resource, id) {
    return apiClient.delete("/" + resource + "/" + id);
  },

  //for file
  uploadFile(resource) {
    const form = new FormData();
    form.append("uploadedFile", resource);
    return apiClientForFile.post("/files/upload", form);
  },
  downloadFile(filename) {
    return apiClientForFile.post("/files/download?filename=" + filename);
  },
  getFilesName() {
    return apiClientForFile.get("/files/filenames");
  },
  deleteFile(filename) {
    return apiClientForFile.delete("/files?filename=" + filename);
  },

  getUrl() {
    return baseURL;
  },
  getAuthorization() {
    return authorizationString;
  }
};
