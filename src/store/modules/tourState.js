import ApiService from "../../services/ApiService";
import UserExperienceHelper from "../helpers/UserExperienceHelper.js";
export const namespaced = true;
export const state = {
  baseList: [],
  liveList: [],
  idItem: 1
};
export const mutations = {
  SET_BASE_LIST(state, baseList) {
    state.baseList = baseList;
  },
  SET_LIVE_LIST(state, liveList) {
    state.liveList = liveList;
  },
  RELOAD_TOUR() {
    location.reload();
    //state.baseTour.push(baseTour);
  }
};
export const actions = {
  fetchBaseList({ commit }) {
    UserExperienceHelper.startLoading();
    ApiService.getBaseTour()
      .then(({ data }) => {
        console.log("BaseTour caricati " + data);
        commit("SET_BASE_LIST", data);
      })
      .catch(err => {
        UserExperienceHelper.negativeNotify(err, "baseTour");
      })
      .then(() => {
        UserExperienceHelper.stopLoading();
      });
  },
  addBaseTour({ commit }, baseTour) {
    UserExperienceHelper.startLoading();
    ApiService.addBaseTour(baseTour)
      .then(({ data }) => {
        console.log("baseTour Aggiunta " + data);
        commit("RELOAD_TOUR");
      })
      .catch(err => {
        UserExperienceHelper.negativeNotify(err, "baseTour");
      })
      .then(() => {
        UserExperienceHelper.stopLoading();
      });
  },
  updateBaseTour({ commit }, baseTour) {
    UserExperienceHelper.startLoading();
    ApiService.modifyBaseTour(baseTour)
      .then(({ data }) => {
        console.log("baseTour modificata " + data);
        UserExperienceHelper.positiveNotify("success ");
        commit("RELOAD_TOUR");
      })
      .catch(err => {
        UserExperienceHelper.negativeNotify(err, "baseTour");
      })
      .then(() => {
        UserExperienceHelper.stopLoading();
      });
  },
  deleteBaseTour({ commit }, idBaseTour) {
    UserExperienceHelper.startLoading();
    ApiService.deleteBaseTourById(idBaseTour)
      .then(({ data }) => {
        console.log("baseTour modificata " + data);
        UserExperienceHelper.positiveNotify("success ");
        commit("RELOAD_TOUR");
      })
      .catch(err => {
        UserExperienceHelper.negativeNotify(err, "baseTour");
      })
      .then(() => {
        UserExperienceHelper.stopLoading();
      });
  }
};
export const getters = {
  getBaseById: state => id => {
    console.log("almeno entro nell funzione");
    return state.baseList.find(item => item.id == id);
  },
  getBaseTourById: (state, getters, id) => {
    return getters.getBaseById(id);
  },
  getLiveById: state => id => {
    return state.liveList.find(item => item.id == id);
  }
};
