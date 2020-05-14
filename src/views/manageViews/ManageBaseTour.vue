<template>
  <div>
    <q-tabs v-model="tab" align="justify">
      <q-tab name="edit" icon="edit" />
      <q-tab name="settings" icon="settings" />
    </q-tabs>

    <q-card-section>
      <q-tab-panels v-model="this.tab" animated>
        <q-tab-panel name="edit">
          ciao edit
        </q-tab-panel>
        <q-tab-panel name="settings">
          <SettingBaseTour :idItem="idItem" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card-section>
  </div>
</template>

<script>
import SettingBaseTour from "./settings/SettingBaseTour";
import { mapGetters } from "vuex";
export default {
  props: {
    idItem: {
      type: Number,
      required: true
    }
  },
  components: {
    SettingBaseTour
  },
  data() {
    return {
      tab: "edit"
    };
  },
  computed: {
    ...mapGetters("tourState", ["getBaseById"])
  }
};
</script>

<style lang="scss" scoped></style>
