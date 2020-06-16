<template>
  <q-dialog
    :value="value"
    @input="updateValue"
    full-width
    full-height
    style="overflow: hidden;"
    class="row no-wrap"
  >
    <q-layout view="Lhh lpR fff" container class="bg-white">
      <q-header class="bg-primary">
        <q-toolbar>
          <q-toolbar-title>{{ title }}</q-toolbar-title>
          <q-btn flat v-close-popup round dense icon="close" />
        </q-toolbar>
        <TabsItem :labelTabs="labelTabs" v-model="tab" />
      </q-header>

      <q-page-container>
        <q-page>
          <component
            v-bind:is="typeItem"
            :idItem="idItem"
            :tab="tab"
          ></component>
        </q-page>
      </q-page-container>
    </q-layout>
  </q-dialog>
</template>

<script>
import ManageBaseTour from "@/views/manageViews/ManageBaseTour.vue";
import ManageLiveTour from "@/views/manageViews/ManageLiveTour.vue";
import ManageContent from "@/views/manageViews/ManageContent.vue";
import TabsItem from "@/components/toolbar/TabsItem.vue";
export default {
  name: "ManageDialog",
  components: {
    BaseTour: ManageBaseTour,
    LiveTour: ManageLiveTour,
    Content: ManageContent,
    TabsItem
  },
  props: {
    value: {
      type: Boolean
    },
    title: {
      type: String,
      required: true
    },
    idItem: {
      type: Number,
      required: true
    },
    typeItem: {
      type: String,
      required: true
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    }
  },
  data() {
    return {
      tab: "edit",
      labelTabs: [
        {
          icon: "edit",
          name: "edit"
        },
        {
          icon: "settings",
          name: "settings"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
