<template>
  <div class="row items-start q-gutter-md">
    <BaseIntersection v-for="(item, index) in listItem" :key="index">
      <MediaItem
        :item="item"
        :index="index"
        :isExternalMedia="isExternalMedia"
        @click="onClickMediaItem"
      />
    </BaseIntersection>
    <CarouselDialog
      ref="carousel"
      v-model="openCarousel"
      :listMedia="listItem"
      :isExternalMedia="isExternalMedia"
    />
  </div>
</template>
<script>
import MediaItem from "@/components/item/MediaItem.vue";
import CarouselDialog from "@/components/dialog/CarouselDialog.vue";

export default {
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
