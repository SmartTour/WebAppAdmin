<template>
  <div class="q-pa-md">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <BaseInput
        type="text"
        v-model="title"
        label="Titolo"
        :rules="[val => !!val || 'Il campo non può essere vuoto']"
      />
      <div class="q-gutter-sm">
        <q-radio v-model="type" val="Article" label="Articolo" />
        <q-radio disable v-model="type" val="image" label="Immagine" />
        <q-radio disable v-model="type" val="video" label="Video" />
        <q-radio disable v-model="type" val="audio" label="Audio" />
      </div>

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
  name: "CreateContentForm",
  data() {
    return {
      title: "",
      type: "Article"
    };
  },

  methods: {
    ...mapActions("tourState", ["addEntity"]),
    onSubmit() {
      let content = {
        Title: this.title,
        Type: this.type
      };

      this.addEntity({ nameEntity: "contents", entity: content });
      this.$emit("submit");
    },

    onReset() {
      this.title = "";
      this.type = "";
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
