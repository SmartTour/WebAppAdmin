<template>
  <div>
    <q-card class="my-card">
      <q-item clickable v-ripple @click="onClick">
        <q-img v-if="isImage" :src="isExternalMedia ? item.url : urlItem" />
        <q-video v-if="isVideo" :src="isExternalMedia ? item.url : urlItem" />
      </q-item>
      <q-item>
        <q-item-section align="center">
          <q-item-label>{{ item.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-card>
  </div>
</template>

<script>
import { urlWebApi } from "@/assets/config.json";
import { mapState } from "vuex";
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    isExternalMedia: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      this.$emit("click", this.index);
    }
  },
  computed: {
    ...mapState("userState", ["user"]),
    urlItem() {
      return (
        urlWebApi +
        "/files/resource?filename=" +
        this.item.name +
        "&idAgency=" +
        this.user.agencyID
      );
    },
    isImage() {
      return this.item.type.includes("image");
    },
    isVideo() {
      return this.item.type.includes("video");
    }
  }
};
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
