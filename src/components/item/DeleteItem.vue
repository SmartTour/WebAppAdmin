<template>
  <BaseItem :label="label" @click="dialogOpen = true">
    <ConfirmDialog v-model="dialogOpen" @confirmation-user="onConfirmation" />
  </BaseItem>
</template>

<script>
import ConfirmDialog from "@/components/dialog/ConfirmDialog.vue";
export default {
  components: {
    ConfirmDialog
  },
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
