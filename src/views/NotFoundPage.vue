<template>
  <q-page padding id="pageNotFound">
    <router-link :to="{ name: 'Login' }">torna alla login</router-link>
  </q-page>
</template>
<style lang="scss" scoped>
#pageNotFound {
  background-image: url("../assets/backgrounds/notFound.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
