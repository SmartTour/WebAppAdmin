<template>
  <div>
    <q-card class="my-card">
      <q-item clickable v-ripple @click="onClick">
        <q-img
          v-if="isImage"
          :src="isExternalMedia ? item.url : urlItem"
          style="height: 280px;width:600px"
        />
        <q-video
          v-if="isVideo"
          :src="isExternalMedia ? item.url : urlItem"
          style="height: 280px;width:600px"
        />
      </q-item>
      <q-item>
        <q-item-section align="center">
          <q-item-label>{{ item.name }}</q-item-label>
        </q-item-section>
        <q-item-section avatar v-if="selectable">
          <q-toggle :value="selected" @input="onSelected" color="accent" />
          <!-- <q-checkbox v-model="check" :val="item.name" color="teal" /> -->
        </q-item-section>
      </q-item>
    </q-card>
  </div>
</template>

<script>
import { urlWebApi } from "@/assets/config.json";
import { mapState, mapActions } from "vuex";
export default {
  name: "MediaItem",
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
    },
    selectable: {
      type: Boolean,
      required: true
    }
  },
  created: function() {
    this.selected = this.$store.getters["selectableState/isSelected"](
      this.item
    );
  },
  data() {
    return {
      selected: false
    };
  },
  methods: {
    ...mapActions("selectableState", ["addSelected", "removeSelected"]),
    onClick() {
      this.$emit("click", this.index);
    },
    onSelected(value) {
      if (value) this.addSelected(this.item);
      else this.removeSelected(this.item);
      this.selected = value;
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
