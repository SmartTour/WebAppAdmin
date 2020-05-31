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

export function mapHandlingFunctions({ fields }) {
  const object = {};
  for (let x = 0; x < fields.length; x++) {
    const field = [fields[x]];
    object["GET" + field] = function(nameEntity, id) {
      let entity = this.$store.getters["tourState/getEntityById"]({
        nameEntity: nameEntity,
        id: id
      });
      return entity[field];
    };
    object["SET" + field] = function(nameEntity, value, id) {
      let newState = this.$store.getters["tourState/getEntityById"]({
        nameEntity: nameEntity,
        id: id
      });
      newState[field] = value;
      this.$store.dispatch("tourState/updateEntity", {
        nameEntity: nameEntity,
        entity: newState
      });
    };
  }
  return object;
}

//non funziona perchè idItem cambia per ogni elemento
export function mapProperties({ fields, idItem, nameEntity }) {
  console.log("siamo entrati nel map");
  const object = {};
  for (let x = 0; x < fields.length; x++) {
    const field = [fields[x]];
    object[field] = {
      get() {
        let entity = this.$store.getters["tourState/getEntityById"]({
          nameEntity: nameEntity,
          id: idItem
        });
        return entity[field];
      },
      set(value) {
        let newState = this.$store.getters["tourState/getEntityById"]({
          nameEntity: nameEntity,
          id: idItem
        });
        newState[field] = value;
        this.$store.dispatch("tourState/updateEntity", {
          nameEntity: nameEntity,
          entity: newState
        });
      }
    };
  }
  return object;
}
