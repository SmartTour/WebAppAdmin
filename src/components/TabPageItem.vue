<template>
  <q-page>
    <div class="row items-start q-gutter-md">
      <div v-for="item in listItem" :key="item.id">
        <CardItem
          :idItem="item.id"
          :title="item.title"
          :description="item.description"
          :typeItem="typeItem"
          :manageDialogTitle="manageDialogTitle"
        />
      </div>
    </div>
  </q-page>
</template>
<script>
import CardItem from "@/components/CardItem.vue";
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
  },
  methods: {
    goSomewhere() {}
  }
};
</script>
