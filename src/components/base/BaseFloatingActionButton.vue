<template>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn fab :icon="iconName" color="accent" @click="onClick" />
  </q-page-sticky>
</template>

<script>
export default {
  name: "BaseFloatingActionButton",
  props: {
    iconName: {
      type: String,
      default: "add"
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped></style>
