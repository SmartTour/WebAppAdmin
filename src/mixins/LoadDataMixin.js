// import { mapActions } from "vuex";

export default {
  methods: {
    loadAllData() {
      return this.$store
        .dispatch("userState/loadAgency")
        .then(() => {
          this.$q.notify({
            type: "positive",
            message: "agency loaded with success"
          });
        })
        .catch(err => {
          let errorMessage = err.response
            ? err.response.data.message
            : "server al momento non disponibile agency";
          this.$q.notify({
            type: "negative",
            message: errorMessage
          });
        });
    }
  }
};
