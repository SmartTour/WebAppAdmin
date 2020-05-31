<template>
  <q-toolbar>
    <q-tabs
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
      class="text-grey full-width"
      active-color="primary"
      indicator-color="primary"
      narrow-indicator
      align="justify"
    >
      <div v-for="option in labelTabs" :key="option.name" class="full-width">
        <q-tab :name="option.name" :label="option.label" />
      </div>
    </q-tabs>
  </q-toolbar>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String
    },
    labelTabs: {
      type: Array,
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
