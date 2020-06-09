<template>
  <div class="q-gutter-md">
    <PreviewItem :contentHtml="mediaHtml" align="center" />
    <BaseInput
      type="textarea"
      :maxLength="1000"
      v-model="mediaHtml"
      label="Codice Html"
    />
    <div align="right">
      <q-btn label="Aggiungi" @click="onAddMedia" color="accent" />
    </div>
  </div>
</template>

<script>
import PreviewItem from "@/components/item/PreviewItem.vue";
import { urlWebApi } from "@/assets/config.json";
import { mapState } from "vuex";
export default {
  name: "MediaHtmlEditor",
  created: function() {
    this.listMedia.forEach(media => {
      let html = "";
      if (media.type.includes("image")) {
        if (media.url) html = this.imageHtml(media.url);
        else html = this.imageHtml(this.internalUrl(media.name));
      } else if (media.type.includes("video")) {
        html = this.videoHtml(media.url);
      }
      this.mediaHtml += html;
    });
  },
  components: {
    PreviewItem
  },
  props: {
    listMedia: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      mediaHtml: ""
    };
  },
  computed: {
    ...mapState("userState", ["user"])
  },
  methods: {
    onAddMedia() {
      this.$emit("addMediaHtml", this.mediaHtml);
    },
    imageHtml(url) {
      return "<img src='" + url + "' style='width: 100%;height: auto;' >";
    },
    videoHtml(url) {
      return "<iframe width='100%' height='auto' src='" + url + "'></iframe>";
    },
    internalUrl(name) {
      return (
        urlWebApi +
        "/files/resource?filename=" +
        name +
        "&idAgency=" +
        this.user.agencyID
      );
    }
  }
};
</script>

<style lang="scss" scoped></style>
