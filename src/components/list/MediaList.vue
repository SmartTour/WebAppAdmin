<template>
  <div>
    <div v-if="listItem.length == 0" class="fixed-center">
      <q-img
        :src="require('@/assets/images/no-media.png')"
        :ratio="16 / 9"
        style="height: 500px; width: 700px"
      />
    </div>
    <div v-else class="row items-start q-gutter-md">
      <BaseIntersection v-for="(item, index) in listItem" :key="index">
        <MediaItem
          :item="item"
          :index="index"
          :isExternalMedia="isExternalMedia"
          @click="onClickMediaItem"
          :selectable="selectable"
        />
      </BaseIntersection>
      <CarouselDialog
        ref="carousel"
        v-model="openCarousel"
        :listMedia="listItem"
        :isExternalMedia="isExternalMedia"
      />
    </div>
  </div>
</template>
<script>
import MediaItem from "@/components/item/MediaItem.vue";
import CarouselDialog from "@/components/dialog/CarouselDialog.vue";

export default {
  name: "MediaList",
  components: {
    CarouselDialog,
    MediaItem
  },
  props: {
    listItem: {
      type: Array,
      required: true
    },
    isExternalMedia: {
      type: Boolean,
      default: false
    },
    selectable: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    onClickMediaItem(index) {
      this.openCarousel = true;
      this.$refs.carousel._data.slide = index;
    }
  },
  data() {
    return {
      openCarousel: false
    };
  }
};
</script>
