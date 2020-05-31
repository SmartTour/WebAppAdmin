<template>
  <div class="row items-start q-gutter-md">
    <BaseIntersection v-for="item in listItem" :key="item.id">
      <CardItem
        :idItem="item.id"
        :title="item.title"
        :description="item.description"
        :typeItem="typeItem"
        :manageDialogTitle="manageDialogTitle"
      />
    </BaseIntersection>
  </div>
</template>
<script>
import CardItem from "@/components/item/CardItem.vue";
export default {
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
    }
  },
  components: {
    CardItem
  }
};
</script>
