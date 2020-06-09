export const namespaced = true;
export const state = {
  selectedList: []
};
export const mutations = {
  ADD_SELECTED(state, selected) {
    state.selectedList.push(selected);
  },
  REMOVE_SELECTED(state, selected) {
    let list = state.selectedList.slice();
    let index = list.indexOf(selected);

    if (index != -1) list.splice(index, 1);

    state.selectedList = list;
  },
  CLEAR_LIST(state) {
    state.selectedList = [];
  }
};
export const actions = {
  addSelected({ commit }, selected) {
    commit("ADD_SELECTED", selected);
  },
  removeSelected({ commit }, selected) {
    commit("REMOVE_SELECTED", selected);
  },
  clearSelectedList({ commit }) {
    commit("CLEAR_LIST");
  }
};
export const getters = {
  isSelected: state => selected => {
    let index = state.selectedList.indexOf(selected);

    if (index != -1) return true;
    return false;
  }
};
