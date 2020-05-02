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
      <q-tab name="liveTour" label="Live" />
      <q-tab name="baseTour" label="Base" />
    </q-tabs>
    <q-separator />

    <q-tab-panels v-model="this.tab" animated>
      <q-tab-panel name="liveTour">
        <LiveTourTab />
      </q-tab-panel>

      <q-tab-panel name="baseTour">
        <BaseTourTab />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>
<script>
import BaseTourTab from "@/views/mainViews/tourTabs/BaseTourTab.vue";
import LiveTourTab from "@/views/mainViews/tourTabs/LiveTourTab.vue";
export default {
  components: {
    BaseTourTab,
    LiveTourTab
  },

  beforeCreate() {
    this.$store.dispatch("layoutState/updateType", "default");
  },
  data() {
    return {
      tab: "liveTour"
    };
  }
};
</script>
