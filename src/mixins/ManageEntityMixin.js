import { mapActions } from "vuex";
import { mapHandlingFunctions } from "@/store/helpers/storeHelpers.js";
export default {
  methods: {
    ...mapActions("tourState", ["deleteEntity"]),
    ...mapHandlingFunctions({
      fields: this.fields
    }),
    onDelete(value) {
      console.log(value);
      if (value) {
        this.deleteEntity({ nameEntity: this.nameEntity, id: this.idItem });
      }
    }
  }
};
