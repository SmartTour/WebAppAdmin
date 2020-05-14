<template>
  <q-dialog :value="value" @input="updateValue" full-width full-height>
    <q-card>
      <q-toolbar class="bg-primary text-white">
        <q-avatar><q-icon name="build" /> </q-avatar>

        <q-toolbar-title>{{ title }}</q-toolbar-title>

        <q-space />

        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>
      <component v-bind:is="typeItem" :idItem="idItem"></component>
    </q-card>
  </q-dialog>
</template>

<script>
import ManageBaseTour from "@/views/manageViews/ManageBaseTour.vue";
export default {
  components: {
    BaseTour: ManageBaseTour
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
  }
};
</script>

<style lang="scss" scoped></style>
