<template>
  <div>
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="baseTour" label="Base" />
      <q-tab name="liveTour" label="Live" />
    </q-tabs>
    <q-separator />

    <q-tab-panels v-model="this.tab" animated>
      <q-tab-panel name="baseTour">
        <ItemList
          :listItem="baseTours"
          typeItem="BaseTour"
          manageDialogTitle="gestisci tour"
        />
      </q-tab-panel>
      <q-tab-panel name="liveTour">
        <ItemList
          :listItem="liveTours"
          typeItem="LiveTour"
          manageDialogTitle="gestisci tour"
        />
      </q-tab-panel>
    </q-tab-panels>

    <BaseFloatingActionButton @click="openDialog = true" />
    <BaseDialog v-model="openDialog" title="Crea un nuovo tuor">
      <slot name="createForm"><CreateTourForm /></slot>
    </BaseDialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
import ItemList from "@/components/list/ItemList.vue";
import CreateTourForm from "@/components/form/CreateTourForm.vue";

export default {
  components: {
    ItemList,
    CreateTourForm
  },

  created: function() {
    this.$store.dispatch("layoutState/updateType", "default");

    this.$store.dispatch("tourState/fetchEntities", "baseTours");
    this.$store.dispatch("tourState/fetchEntities", "liveTours");
  },
  data() {
    return {
      tab: "baseTour",
      openDialog: false
    };
  },
  computed: {
    ...mapState("tourState", ["liveTours"]),
    ...mapState("tourState", ["baseTours"])
  }
};
</script>
