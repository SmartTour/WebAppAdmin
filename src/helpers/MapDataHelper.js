export function mapFields({ fields, nameModule, nameEntity, action }) {
  const object = {};
  for (let x = 0; x < fields.length; x++) {
    const field = [fields[x]];
    object[field] = {
      get() {
        return this.$store.state[nameModule][nameEntity][field];
      },
      set(value) {
        let newState = { ...this.$store.state[nameModule][nameEntity] };
        newState[field] = value;
        this.$store.dispatch(action, newState);
      }
    };
  }
  return object;
}
//non più utilizzato
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
