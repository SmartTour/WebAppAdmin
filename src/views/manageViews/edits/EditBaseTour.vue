<template>
  <div>
    ciao sono un edit semplice <br />
    non esisto
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    idItem: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters("tourState", ["getEntityById"]),
    entity() {
      return this.getEntityById({ nameEntity: "baseTours", id: this.idItem });
    }
  }
};
</script>

<style lang="scss" scoped></style>
