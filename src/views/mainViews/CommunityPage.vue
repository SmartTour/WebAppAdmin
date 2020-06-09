<template>
  <q-page padding>
    <h1>This is my community page</h1>
  </q-page>
</template>
<script>
export default {
  name: "CommunityPage",
  created: function() {
    this.$store.dispatch("layoutState/updateType", "default");
  }
};
</script>
