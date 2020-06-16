<template>
  <q-page padding id="pageNotFound">
    <router-link :to="{ name: 'Login' }">torna alla login</router-link>
  </q-page>
</template>
<script>
export default {
  name: "NotFoundPage"
};
</script>
<style lang="scss" scoped>
#pageNotFound {
  background-image: url("../assets/backgrounds/notFound.png");
  background-position: center;
  background-repeat: no-repeat;
}
</style>
