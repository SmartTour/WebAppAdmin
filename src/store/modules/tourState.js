import ApiService from "../../services/ApiService";
import UserExperienceHelper from "../helpers/UserExperienceHelper.js";
export const namespaced = true;
export const state = {
  baseTours: [],
  liveTours: [],
  contents: [],
  questions: [],
  phrases: [],
  detectionContents: [],
  externalMedias: [],
  internalMedias: []
};
export const mutations = {
  SET_ENTITY(state, { entity, nameEntity }) {
    state[nameEntity] = entity;
  },
  UPDATE_VALUE_OF_ENTITY(state, { entity, nameEntity, index }) {
    //vuex non riconosce i cambiamenti delle entità dell'array, quindi simulo un cambiamento dell'array stesso
    //in questo modo i componenti dipendenti si aggiornano
    let copyStateEntity = state[nameEntity].slice();
    copyStateEntity[index] = entity;
    state[nameEntity] = copyStateEntity;
  },
  RELOAD_TOUR() {
    location.reload();
    //state.baseTour.push(baseTour);
  },
  SET_INTERNAL_MEDIAS(state, internalMedias) {
    state.internalMedias = internalMedias;
  }
};
export const actions = {
  fetchEntities({ commit }, nameEntity) {
    UserExperienceHelper.startLoading();
    ApiService.getEntities(nameEntity)
      .then(({ data }) => {
        commit("SET_ENTITY", { nameEntity: nameEntity, entity: data });
      })
      .catch(err => {
        UserExperienceHelper.negativeNotify(err, nameEntity);
      })
      .then(() => {
        UserExperienceHelper.stopLoading();
      });
  },
  addEntity({ commit }, { nameEntity, entity }) {
    UserExperienceHelper.startLoading();
    ApiService.addEntity(nameEntity, entity)
      .then(({ data }) => {
        console.log("baseTour Aggiunta " + data);
        commit("RELOAD_TOUR");
      })
      .catch(err => {
        UserExperienceHelper.negativeNotify(err, nameEntity);
      })
      .then(() => {
        UserExperienceHelper.stopLoading();
      });
  },
  updateEntity({ commit, getters }, { nameEntity, entity }) {
    UserExperienceHelper.startLoading();
    ApiService.modifyEntity(nameEntity, entity)
      .then(({ data, status }) => {
        console.log(" modificata ");
        console.log(data);
        let oldEntity = getters.getEntityById({
          nameEntity: nameEntity,
          id: entity.id
        });
        let index = getters.getIndexOfEntity({
          nameEntity: nameEntity,
          entity: oldEntity
        });
        console.log(index);
        console.log(oldEntity);
        if (index != -1) {
          commit("UPDATE_VALUE_OF_ENTITY", {
            entity: entity,
            nameEntity: nameEntity,
            index: index
          });
          UserExperienceHelper.positiveNotify(
            "success " + status + " " + nameEntity
          );
        }
      })
      .catch(err => {
        console.log(err);
        UserExperienceHelper.negativeNotify(err, nameEntity);
      })
      .then(() => {
        UserExperienceHelper.stopLoading();
      });
  },
  deleteEntity({ commit }, { nameEntity, id }) {
    UserExperienceHelper.startLoading();
    ApiService.deleteEntityById(nameEntity, id)
      .then(({ data }) => {
        console.log(nameEntity + " modificata " + data);
        UserExperienceHelper.positiveNotify("success ");
        commit("RELOAD_TOUR");
      })
      .catch(err => {
        UserExperienceHelper.negativeNotify(err, nameEntity);
      })
      .then(() => {
        UserExperienceHelper.stopLoading();
      });
  },
  fetchInternalMedias({ commit }) {
    UserExperienceHelper.startLoading();
    ApiService.getFilesName()
      .then(({ data }) => {
        commit("SET_INTERNAL_MEDIAS", data);
      })
      .catch(err => {
        UserExperienceHelper.negativeNotify(err, "media");
      })
      .then(() => {
        UserExperienceHelper.stopLoading();
      });
  },
  deleteInternalMedia({ commit }, name) {
    UserExperienceHelper.startLoading();
    ApiService.deleteFile(name)
      .then(({ status }) => {
        UserExperienceHelper.positiveNotify("success " + status);
        commit("RELOAD_TOUR");
      })
      .catch(err => {
        UserExperienceHelper.negativeNotify(err, "media");
      })
      .then(() => {
        UserExperienceHelper.stopLoading();
      });
  }
};
export const getters = {
  getEntityById: state => ({ nameEntity, id }) => {
    return state[nameEntity].find(item => item.id == id);
  },
  getIndexOfEntity: state => ({ nameEntity, entity }) => {
    return state[nameEntity].indexOf(entity);
  }
};
