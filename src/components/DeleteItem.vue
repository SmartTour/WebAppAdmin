<template>
  <BaseItem :label="label" @click="dialogOpen = true">
    <BaseConfirmDialog
      v-model="dialogOpen"
      @confirmation-user="onConfirmation"
    />
  </BaseItem>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    }
  },
  data() {
    return {
      dialogOpen: false
    };
  },
  methods: {
    onConfirmation(value) {
      this.$emit("confirmation-user", value);
    }
  }
};
</script>

<style lang="scss" scoped></style>
