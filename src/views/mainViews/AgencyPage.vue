<template>
  <div>
    <h1>Questa è la dashboard dell'azienda</h1>
    <p>
      dati <br />
      {{ agency }}
    </p>
    <!-- <CardItem
      :manageAction="goToSmartTour"
      :title="smartTour.title"
      :nameAgency="agency.name"
      :desc="smartTour.description"
    /> -->
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch("layoutState/updateType", "default");
    if (this.agency == null) this.$store.dispatch("userState/fetchAgency");
  },

  computed: {
    ...mapState("userState", ["user", "agency"])
  }
};
</script>
