<template>
  <div>
    <h1>This is my maps page</h1>
  </div>
</template>
<script>
export default {
  created: function() {
    this.$store.dispatch("layoutState/updateType", "default");
  }
};
</script>
