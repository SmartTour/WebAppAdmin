<template>
  <div>
    <div v-if="listItem.length == 0" class="fixed-center">
      <q-img
        :src="require('@/assets/images/empty-list.png')"
        :ratio="16 / 9"
        style="height: 500px; width: 700px"
      />
    </div>
    <div v-else class="row items-start q-gutter-md">
      <BaseIntersection v-for="item in listItem" :key="item.id">
        <CardItem
          :item="item"
          :typeItem="typeItem"
          :manageDialogTitle="manageDialogTitle"
          :selectable="selectable"
        />
      </BaseIntersection>
    </div>
  </div>
</template>
<script>
import CardItem from "@/components/item/CardItem.vue";
export default {
  name: "ItemList",
  props: {
    listItem: {
      type: Array,
      required: true
    },
    typeItem: {
      type: String,
      required: true
    },
    manageDialogTitle: {
      type: String,
      required: true
    },
    selectable: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CardItem
  }
};
</script>
