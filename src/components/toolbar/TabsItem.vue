<template>
  <q-tabs
    :value="value"
    @input="updateValue"
    v-bind="$attrs"
    class="text-grey full-width bg-grey-3"
    active-color="primary"
    indicator-color="primary"
    narrow-indicator
    align="justify"
  >
    <div v-for="option in labelTabs" :key="option.name" class="full-width">
      <q-tab :name="option.name" :label="option.label" :icon="option.icon" />
    </div>
  </q-tabs>
</template>

<script>
export default {
  name: "TabsItem",
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
