<template>
  <div>
    <div class="fixed-center">
      <q-img
        :src="require('@/assets/images/empty-list.png')"
        :ratio="16 / 9"
        style="height: 500px; width: 700px"
      />
    </div>
    <BaseFloatingActionButton />
  </div>
</template>

<script>
export default {
  name: "DetectionContentsPage",
  created: function() {
    this.$store.dispatch("layoutState/updateType", "default");
  }
};
</script>

<style lang="scss" scoped></style>
