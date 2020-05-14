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
        <TabPageItem
          :listItem="baseList"
          typeItem="BaseTour"
          manageDialogTitle="gestisci tour"
        />
      </q-tab-panel>
      <q-tab-panel name="liveTour">
        <TabPageItem
          :listItem="liveList"
          typeItem="Live Tour"
          manageDialogTitle="gestisci tour"
        />
      </q-tab-panel>
    </q-tab-panels>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="accent" @click="openDialog = true" />
    </q-page-sticky>
    <BaseDialog v-model="openDialog" title="Crea un nuovo tuor">
      <slot name="createForm"><CreateTourForm /></slot>
    </BaseDialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
import TabPageItem from "@/components/TabPageItem.vue";
import CreateTourForm from "@/components/form/CreateTourForm.vue";

export default {
  components: {
    TabPageItem,
    CreateTourForm
  },

  beforeCreate() {
    this.$store.dispatch("layoutState/updateType", "default");
    if (this.baseList == null) this.$store.dispatch("tourState/fetchBaseList");
  },
  data() {
    return {
      tab: "baseTour",
      openDialog: false
    };
  },
  computed: {
    ...mapState("tourState", ["liveList"]),
    ...mapState("tourState", ["baseList"])
  }
};
</script>
