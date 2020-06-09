<template>
  <q-page padding id="loginPage">
    <div class="q-pa-md row items-start q-gutter-md">
      <LoginItem />
    </div>
  </q-page>
</template>

<script>
import { mapState } from "vuex";
import LoginItem from "@/components/form/LoginItem.vue";
export default {
  name: "LoginPage",
  beforeCreate() {
    this.$store.dispatch("layoutState/updateType", "public");
  },
  components: {
    LoginItem
  },
  computed: {
    ...mapState(["layoutState"])
  }
};
</script>
<style lang="scss" scoped>
#loginPage {
  background-image: url("../assets/backgrounds/login.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
