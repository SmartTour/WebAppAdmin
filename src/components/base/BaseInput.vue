<template>
  <q-input
    v-bind="$attrs"
    color="secondary"
    filled
    bottom-slots
    :value="value"
    @input="updateValue"
    :label="label"
    :maxlength="maxLength"
  >
    <template v-if="isClearData" v-slot:append>
      <q-icon name="close" @click="clearData" class="cursor-pointer" />
    </template>
    <template v-if="nameIcon != null" v-slot:prepend>
      <q-icon :name="nameIcon" />
    </template>
  </q-input>
</template>

<script>
export default {
  name: "BaseInput",
  inheritAttrs: false,
  props: {
    value: {
      type: String
    },
    label: {
      type: String,
      required: true
    },
    maxLength: {
      type: Number,
      default: 20
    },
    nameIcon: {
      type: String,
      default: null
    },
    isClearData: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
    clearData() {
      this.$emit("input", "");
    }
  }
};
</script>

<style lang="scss" scoped></style>
