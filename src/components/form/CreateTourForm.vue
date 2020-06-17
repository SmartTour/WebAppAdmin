<template>
  <div class="q-pa-md">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <BaseInput
        type="text"
        v-model="title"
        label="Titolo"
        :rules="[val => !!val || 'Il campo non può essere vuoto']"
      />
      <BaseInput
        type="textarea"
        :maxLength="500"
        v-model="description"
        label="Descizione"
        placeholder="Inserisci la descrizione del tuo tour"
      />
      <q-select
        filled
        v-model="typeTour"
        :options="optionsTour"
        label="Tipo tour"
      />

      <div align="right">
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
        <q-btn label="Crea" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CreateTourForm",
  data() {
    return {
      title: "",
      description: "",
      typeTour: "BaseTour",
      optionsTour: ["BaseTour", "LiveTour"]
    };
  },

  methods: {
    ...mapActions("tourState", ["addEntity"]),
    onSubmit() {
      let tour = {
        Title: this.title,
        Description: this.description
      };
      let nameEntity = this.typeTour == "BaseTour" ? "baseTours" : "liveTours";

      this.addEntity({ nameEntity: nameEntity, entity: tour });
      this.$emit("submit");
    },

    onReset() {
      this.title = "";
      this.description = "";
      this.typeTour = "BaseTour";
    }
  },
  computed: {
    isValidTitle() {
      return this.title != "";
    }
  }
};
</script>

<style lang="scss" scoped></style>
