import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:57929/api`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 5000
});

export default {
  setToken(token) {
    let authorization = "Bearer " + token;

    apiClient.defaults.headers.common["Authorization"] = authorization;
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
  getBaseTour() {
    return apiClient.get("/baseTours");
  },
  getBaseTourById(id) {
    return apiClient.get("/baseTours/" + id);
  },
  addBaseTour(baseTour) {
    return apiClient.post("/baseTours", baseTour);
  },
  modifyBaseTour(baseTour) {
    return apiClient.put("/baseTours/" + baseTour.id, baseTour);
  },
  deleteBaseTourById(id) {
    return apiClient.delete("/baseTours/" + id);
  }
};
