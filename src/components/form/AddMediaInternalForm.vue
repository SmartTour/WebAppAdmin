<template>
  <div class="row items-start justify-center q-gutter-md" align="center">
    <q-file
      v-model="files"
      label="Pick files"
      outlined
      use-chips
      multiple
      style="max-width: 500px"
    />
    <q-btn
      :disable="canUpload"
      flat
      round
      color="primary"
      icon="cloud_upload"
      @click="onUpload"
    />
  </div>
</template>

<script>
import { uploadFiles } from "@/helpers/FileHelper.js";
export default {
  methods: {
    onUpload() {
      this.files = uploadFiles(this.files);
    }
  },
  data() {
    return {
      files: []
    };
  },
  computed: {
    canUpload() {
      return this.files.length == 0;
    }
  }
};
</script>

<style lang="scss" scoped></style>
