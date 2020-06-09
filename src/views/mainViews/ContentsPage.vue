<template>
  <q-page>
    <ItemList
      :listItem="contents"
      typeItem="Content"
      manageDialogTitle="Gestisci contenuti"
      :selectable="selectable"
    />
    <BaseFloatingActionButton @click="openDialog = true" />
    <BaseDialog v-model="openDialog" title="Crea un nuovo contenuto">
      <slot name="createForm">
        <CreateContentForm @submit="openDialog = false" />
      </slot>
    </BaseDialog>
  </q-page>
</template>
<script>
import { mapState } from "vuex";
import ItemList from "@/components/list/ItemList.vue";
import CreateContentForm from "@/components/form/CreateContentForm.vue";
export default {
  name: "ContentsPage",
  components: {
    CreateContentForm,
    ItemList
  },
  props: {
    selectable: {
      type: Boolean,
      default: false
    }
  },
  created: function() {
    this.$store.dispatch("layoutState/updateType", "default");
    this.$store.dispatch("tourState/fetchEntities", "contents");
  },

  data() {
    return {
      openDialog: false
    };
  },
  computed: {
    ...mapState("tourState", ["contents"])
  }
};
</script>
