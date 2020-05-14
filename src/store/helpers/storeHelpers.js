import { mapGetters } from "vuex";

export const authComputed = {
  ...mapGetters("userState", ["loggedIn"])
};
export function mapFields(options) {
  const object = {};
  for (let x = 0; x < options.fields.length; x++) {
    const field = [options.fields[x]];
    object[field] = {
      get() {
        return this.$store.state[options.module][options.base][field];
      },
      set(value) {
        let newState = { ...this.$store.state[options.module][options.base] };
        newState[field] = value;
        this.$store.dispatch(options.action, newState);
      }
    };
  }
  return object;
}

export function mapHandlingFunctions(options) {
  const object = {};
  for (let x = 0; x < options.fields.length; x++) {
    const field = [options.fields[x]];
    object["Get" + field] = function(id) {
      let entity = this.$store.getters[options.getterReference](id);
      return entity[field];
    };
    object["Set" + field] = function(value, id) {
      let newState = this.$store.getters[options.getterReference](id);
      newState[field] = value;
      this.$store.dispatch(options.actionOnSetReference, newState);
    };
  }
  return object;
}
