<template>
  <div>
    <div>
      <h1>SIAMO TRE RAGAZZI CHE FANNO UN PROJECT WORK, e non una tesina...</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutUsPage",
  beforeCreate() {
    this.$store.dispatch("layoutState/updateType", "public");
  }
};
</script>
