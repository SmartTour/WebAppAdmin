<template>
  <div class="q-pa-md ">
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
    <div class="q-pa-md" align="right">
      <q-btn color="accent" label="Salva" @click="onSave" />
    </div>
    {{ items }}
  </div>
</template>

<script>
import draggable from "vuedraggable";
import ItemDraggable from "./ItemDraggable.vue";
export default {
  name: "ZoneListDraggable",
  components: {
    draggable,
    ItemDraggable
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      drag: false
    };
  },

  computed: {
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
    onSave() {},
    updateItems(value) {
      console.log(value);
    },
    add() {}
  }
};
</script>
