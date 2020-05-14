import Vue from "vue";
import Vuex from "vuex";

import * as layoutState from "@/store/modules/layoutState";
import * as communityState from "@/store/modules/communityState";
import * as smartThingsState from "@/store/modules/smartThingsState";
import * as mapState from "@/store/modules/mapState";
import * as tourState from "@/store/modules/tourState";
import * as userState from "@/store/modules/userState";
// import Presentation from "../models/entities/Presentation";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layoutState,
    communityState,
    smartThingsState,
    mapState,
    tourState,
    userState
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
