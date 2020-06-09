<template>
  <q-page style="padding-top: 50px" class="q-pa-md">
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="interni">
        <MediaList :listItem="internalMedias" :selectable="selectable" />
      </q-tab-panel>
      <q-tab-panel name="esterni">
        <MediaList
          :listItem="externalMedias"
          :isExternalMedia="true"
          :selectable="selectable"
        />
      </q-tab-panel>
    </q-tab-panels>

    <BaseDialog
      v-model="openInternalForm"
      title="Aggiungi contenuti multimediali"
    >
      <slot name="createForm"><AddMediaInternalForm /></slot>
    </BaseDialog>

    <BaseDialog
      v-model="openExternalForm"
      title="Aggiungi contenuti multimediali"
    >
      <slot name="createForm"
        ><AddMediaExternalForm @submit="openExternalForm = false"
      /></slot>
    </BaseDialog>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab icon="add" direction="up" color="accent">
        <q-fab-action
          @click="openInternalForm = true"
          color="primary"
          icon="storage"
        />
        <q-fab-action
          @click="openExternalForm = true"
          color="primary"
          icon="link"
        />
      </q-fab>
    </q-page-sticky>
    <q-page-sticky position="top" expand class="bg-grey-3">
      <TabsItem :labelTabs="labelTabs" v-model="tab" />
    </q-page-sticky>
  </q-page>
</template>
<script>
import AddMediaInternalForm from "@/components/form/AddMediaInternalForm.vue";
import AddMediaExternalForm from "@/components/form/AddMediaExternalForm.vue";
import MediaList from "@/components/list/MediaList.vue";
import TabsItem from "@/components/toolbar/TabsItem.vue";

import { mapState } from "vuex";

export default {
  name: "MediaPage",
  components: {
    AddMediaInternalForm,
    AddMediaExternalForm,
    MediaList,
    TabsItem
  },
  created: function() {
    this.$store.dispatch("layoutState/updateType", "default");

    this.$store.dispatch("tourState/fetchInternalMedias");
    this.$store.dispatch("tourState/fetchEntities", "externalMedias");
  },
  props: {
    selectable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      openInternalForm: false,
      openExternalForm: false,
      tab: "interni",
      labelTabs: [
        {
          label: "Interni",
          name: "interni"
        },
        {
          label: "Esterni",
          name: "esterni"
        }
      ]
    };
  },
  computed: {
    ...mapState("tourState", ["internalMedias"]),
    ...mapState("tourState", ["externalMedias"])
  }
};
</script>
