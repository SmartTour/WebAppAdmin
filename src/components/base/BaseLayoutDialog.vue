<template>
  <q-dialog
    :value="value"
    @input="updateValue"
    v-bind="$attrs"
    @before-show="onBeforeShow"
  >
    <q-layout
      view="Lhh lpR fff"
      container
      class="bg-white"
      style="width: 700px; max-width: 80vw;"
    >
      <q-header class="bg-primary">
        <q-toolbar>
          <q-toolbar-title>{{ title }}</q-toolbar-title>
          <q-btn flat v-close-popup round dense icon="close" />
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page padding>
          <slot></slot>
        </q-page>
      </q-page-container>
    </q-layout>
  </q-dialog>
</template>

<script>
export default {
  name: "BaseLayoutDialog",
  inheritAttrs: false,
  props: {
    value: {
      type: Boolean
    },
    title: {
      type: String,
      required: true
    },
    closeIcon: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
    onBeforeShow(evt) {
      this.$emit("before-show", evt);
    }
  }
};
</script>

<style lang="scss" scoped></style>
