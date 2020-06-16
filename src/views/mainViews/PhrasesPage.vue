<template>
  <q-page>
    <ItemList
      :listItem="phrases"
      typeItem="Phrases"
      manageDialogTitle="Gestisci frase"
    />
    <BaseFloatingActionButton @click="openDialog = true" />
    <BaseDialog v-model="openDialog" title="Crea una nuova frase">
      <slot name="createForm">
        ciao
      </slot>
    </BaseDialog>
  </q-page>
</template>
<script>
import { mapState } from "vuex";
import ItemList from "@/components/list/ItemList.vue";
// import CreateContentForm from "@/components/form/CreateContentForm.vue";
export default {
  name: "PhrasesPage",
  components: {
    // CreateContentForm,
    ItemList
  },
  created: function() {
    this.$store.dispatch("layoutState/updateType", "default");
    this.$store.dispatch("tourState/fetchEntities", "phrases");
  },

  data() {
    return {
      openDialog: false
    };
  },
  computed: {
    ...mapState("tourState", ["phrases"])
  }
};
</script>

<style lang="scss" scoped></style>
