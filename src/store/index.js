import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedValue: null,
    choices: [
      { value: "Colombia", label: "Colombia" },
      { value: "United States", label: "United States" },
      { value: "Canada", label: "Canada" },
      { value: "Costa Rica", label: "Costa Rica" },
      { value: "Spain", label: "Spain" },
    ],
  },
  mutations: {
    setValue(state, selectedValue) {
      state.selectedValue = selectedValue;
    },
  },
  actions: {},
  modules: {},
});
