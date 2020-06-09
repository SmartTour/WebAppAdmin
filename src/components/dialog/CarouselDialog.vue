<template>
  <q-dialog :value="value" @input="updateValue" v-bind="$attrs">
    <q-carousel
      animated
      v-model="slide"
      arrows
      infinite
      padding
      navigation
      control-color="primary"
      class="fit"
      :fullscreen.sync="fullscreen"
    >
      <q-carousel-slide
        v-for="(item, index) in listMedia"
        :key="index"
        :name="index"
      >
        <q-img
          v-if="isImage(item.type) == true"
          :src="isExternalMedia ? item.url : urlImageInternal(item.name)"
        />
        <q-video
          :ratio="16 / 9"
          v-if="isVideo(item.type) == true"
          :src="isExternalMedia ? item.url : urlImageInternal(item.name)"
        />
      </q-carousel-slide>

      <template v-slot:control>
        <q-carousel-control position="top-right" :offset="[18, 18]">
          <q-btn
            push
            round
            dense
            color="accent"
            text-color="white"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>

        <q-carousel-control position="bottom-right" :offset="[18, 18]">
          <q-btn
            push
            round
            flat
            color="accent"
            icon="info"
            @click="openInfoDialog = true"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
    <BaseDialog v-model="openInfoDialog" title="Info">
      <DetailMediaItem
        :mediaItem="currentItem"
        :isExternalMedia="isExternalMedia"
      />
    </BaseDialog>
  </q-dialog>
</template>

<script>
import { mapState } from "vuex";
import { urlWebApi } from "@/assets/config.json";
import DetailMediaItem from "@/components/itemDetail/DetailMediaItem.vue";
export default {
  name: "CarouselDialog",
  inheritAttrs: false,
  components: {
    DetailMediaItem
  },
  props: {
    value: {
      type: Boolean
    },
    listMedia: {
      type: Array,
      required: true
    },
    isExternalMedia: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      fullscreen: false,
      openInfoDialog: false,
      slide: 0
    };
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
    urlImageInternal(filename) {
      return (
        urlWebApi +
        "/files/resource?filename=" +
        filename +
        "&idAgency=" +
        this.user.agencyID
      );
    },
    isImage(type) {
      return type.includes("image");
    },
    isVideo(type) {
      return type.includes("video");
    }
  },
  computed: {
    ...mapState("userState", ["user"]),
    currentItem() {
      return this.listMedia[this.slide];
    }
  }
};
</script>

<style lang="scss" scoped></style>
