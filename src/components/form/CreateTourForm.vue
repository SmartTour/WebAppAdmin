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

      <div>
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
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      title: "",
      description: "",
      typeTour: "BaseTour",
      optionsTour: ["BaseTour", "LiveTour"]
    };
  },

  methods: {
    ...mapActions("tourState", ["addBaseTour"]),
    ...mapState("userState", ["agency"]),
    onSubmit() {
      let baseTour = {
        Title: this.title,
        Description: this.description
      };
      console.log("ecco il body request " + baseTour);

      this.addBaseTour(baseTour);
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
