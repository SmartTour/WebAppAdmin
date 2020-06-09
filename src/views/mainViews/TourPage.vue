<template>
  <div style="padding-top: 50px">
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
      <slot name="createForm"
        ><CreateTourForm @submit="openDialog = false"
      /></slot>
    </BaseDialog>
    <q-page-sticky position="top" expand>
      <TabsItem :labelTabs="labelTabs" v-model="tab" />
    </q-page-sticky>
  </div>
</template>
<script>
import { mapState } from "vuex";
import ItemList from "@/components/list/ItemList.vue";
import CreateTourForm from "@/components/form/CreateTourForm.vue";
import TabsItem from "@/components/toolbar/TabsItem.vue";

export default {
  name: "TourPage",
  components: {
    ItemList,
    CreateTourForm,
    TabsItem
  },

  created: function() {
    this.$store.dispatch("layoutState/updateType", "default");

    this.$store.dispatch("tourState/fetchEntities", "baseTours");
    this.$store.dispatch("tourState/fetchEntities", "liveTours");
  },
  data() {
    return {
      tab: "baseTour",
      openDialog: false,
      labelTabs: [
        {
          label: "Base",
          name: "baseTour"
        },
        {
          label: "Live",
          name: "liveTour"
        }
      ]
    };
  },
  computed: {
    ...mapState("tourState", ["liveTours"]),
    ...mapState("tourState", ["baseTours"])
  }
};
</script>
