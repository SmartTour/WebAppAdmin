import Vue from "vue";
import Vuex from "vuex";

import * as layoutState from "@/store/modules/layoutState";
import * as tourState from "@/store/modules/tourState";
import * as userState from "@/store/modules/userState";
import * as selectableState from "@/store/modules/selectableState";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layoutState,
    tourState,
    userState,
    selectableState
  },
  state: {},
  mutations: {},
  actions: {
    loadData({ dispatch }) {
      dispatch("userState/loadAgency");
      // dispatch(
      //   "presentationState/fetchList",
      //   Presentation.fromObject({
      //     id: 1,
      //     title: "ciao"
      //   }),
      //   { root: true }
      // );
    }
  }
});
