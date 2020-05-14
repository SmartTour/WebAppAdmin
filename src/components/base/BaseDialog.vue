<template>
  <q-dialog
    :value="value"
    @input="updateValue"
    v-bind="$attrs"
    @before-show="onBeforeShow"
  >
    <q-card style="width: 700px; max-width: 80vw;">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">{{ title }}</div>
        <q-space />
        <q-btn v-if="closeIcon" icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <slot></slot>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
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
