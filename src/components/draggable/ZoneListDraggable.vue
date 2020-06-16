<template>
  <div>
    <div v-if="listItems.length == 0" class="fixed-center">
      <q-img
        :src="require('@/assets/images/no-media.png')"
        :ratio="16 / 9"
        style="height: 500px; width: 700px"
      />
    </div>
    <div v-else class="q-pa-md ">
      <div v-if="items">
        <draggable
          :value="items"
          @input="updateItems"
          v-bind="dragOptions"
          @start="drag = true"
          @end="drag = false"
        >
          <transition-group class="q-gutter-md">
            <ItemDraggable v-for="item in items" :key="item.id" :item="item" />
          </transition-group>
        </draggable>
      </div>
      <div class="q-pa-md" align="right" v-if="newItems.length != 0">
        <q-btn color="accent" label="Salva" @click="onSave" />
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import ItemDraggable from "./ItemDraggable.vue";
import { setSortZone, sortZone } from "@/helpers/OrderHelper.js";

export default {
  name: "ZoneListDraggable",
  components: {
    draggable,
    ItemDraggable
  },
  props: {
    listItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      drag: false,
      newItems: []
    };
  },

  computed: {
    items() {
      return this.newItems.length != 0
        ? this.newItems
        : sortZone(this.listItems);
    },
    draggingInfo() {
      return this.drag ? "under drag" : "";
    },
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods: {
    initializeItems() {
      this.items = this.listItems.slice();
    },
    onSave() {
      setSortZone(this.newItems);
      this.$emit("save", this.newItems.slice());
      this.newItems = [];
    },
    updateItems(value) {
      this.newItems = value;
    },
    add() {}
  }
};
</script>
