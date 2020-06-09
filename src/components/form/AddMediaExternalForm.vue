<template>
  <div>
    <q-form class="q-pa-md" @submit="onSubmit">
      <BaseInput
        v-model="name"
        label="Nome"
        :rules="[val => !!val || 'Il nome del media è richiesto']"
      />
      <div class="q-gutter-sm">
        <q-radio dense v-model="type" val="image" label="Immagine" />
        <q-radio dense v-model="type" val="video" label="Video" />
      </div>
      <div v-if="type == 'image'"><q-img :src="link" /></div>
      <div v-if="type == 'video'"><q-video :src="link" /></div>

      <BaseInput
        v-model="link"
        label="URL risorsa"
        nameIcon="link"
        type="url"
        :maxLength="200"
        lazy-rules
        :rules="[val => !!val || 'Il link del media è richiesto']"
      />
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddMediaExternalForm",
  data() {
    return {
      name: "",
      type: "image",
      link: ""
    };
  },
  methods: {
    ...mapActions("tourState", ["addEntity"]),
    onSubmit() {
      let externalMedia = {
        Name: this.name,
        Type: this.type,
        url: this.link
      };

      this.addEntity({ nameEntity: "externalMedias", entity: externalMedia });
      this.$emit("submit");
    }
  }
};
</script>

<style lang="scss" scoped></style>
