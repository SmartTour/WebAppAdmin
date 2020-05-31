import ApiService from "@/services/ApiService.js";
import UserExperienceHelper from "../helpers/UserExperienceHelper.js";
import router from "@/router";
export const namespaced = true;
export const state = {
  user: null,
  agency: { name: {}, titleSmartTour: {} }
};
export const mutations = {
  SET_USER(state, userData) {
    state.user = userData;
    localStorage.setItem("user", JSON.stringify(userData));
    ApiService.setToken(userData.token);
  },
  CLEAR_USER() {
    localStorage.removeItem("user");
    location.reload();
  },
  SET_AGENCY(state, agencyData) {
    state.agency = agencyData;
  }
};
export const actions = {
  autoLogin({ commit }, user) {
    commit("SET_USER", user);
  },
  login({ commit }, credentials) {
    UserExperienceHelper.startLoadingLogin();
    ApiService.login(credentials)
      .then(({ data }) => {
        commit("SET_USER", data);
        router.push({
          name: "Agency"
        });
      })
      .catch(err => {
        UserExperienceHelper.negativeNotify(err, "user");
      })
      .then(() => {
        UserExperienceHelper.stopLoading();
      });
  },
  logout({ commit }) {
    commit("CLEAR_USER");
  },
  updateUser({ commit }, newUser) {
    UserExperienceHelper.startLoading();
    ApiService.modifyUser(newUser)
      .then(response => {
        UserExperienceHelper.positiveNotify("success " + response.status);
        commit("SET_USER", newUser);
      })
      .catch(err => {
        UserExperienceHelper.negativeNotify(err, "user");
        console.log("error");
      })
      .then(() => {
        UserExperienceHelper.stopLoading();
      });
  },
  updateAgency({ commit }, newAgency) {
    UserExperienceHelper.startLoading();
    ApiService.modifyAgency(newAgency)
      .then(response => {
        UserExperienceHelper.positiveNotify("success " + response.status);

        commit("SET_AGENCY", newAgency);
      })
      .catch(err => {
        UserExperienceHelper.negativeNotify(err, "user");
        console.log("error");
      })
      .then(() => {
        UserExperienceHelper.stopLoading();
      });
  },
  fetchAgency({ commit }) {
    UserExperienceHelper.startLoading();
    return ApiService.getAgency()
      .then(response => {
        UserExperienceHelper.positiveNotify("success " + response.status);
        commit("SET_AGENCY", response.data);
      })
      .catch(err => {
        UserExperienceHelper.negativeNotify(err, "agency");
        console.log("error");
      })
      .then(() => {
        UserExperienceHelper.stopLoading();
      });
  }
};
export const getters = {
  loggedIn(state) {
    return !!state.user;
  }
};
