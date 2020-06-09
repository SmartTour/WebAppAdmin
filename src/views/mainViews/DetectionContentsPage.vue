<template>
  <div>
    ciao sono detection content
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
