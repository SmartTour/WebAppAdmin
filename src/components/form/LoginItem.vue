<template>
  <q-card class="my-card fixed-center q-pa-md">
    <q-card-section>
      <div class="text-h6">LOGIN</div>
    </q-card-section>

    <q-card-section>
      <div class="q-pa-md" style="min-width: 250px">
        <q-form @submit.prevent="login" class="q-gutter-md">
          <BaseInput
            color="teal"
            v-model="username"
            label="Username"
            nameIcon="account_box"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Inserire L\'username']"
          />
          <BasePasswordInput
            color="teal"
            v-model="password"
            label="password"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Inserire la password']"
          />

          <div align="right">
            <q-btn label="Login" type="submit" color="primary" />
          </div>
        </q-form>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
// import { mapActions } from "vuex";

import LoadDataMixin from "@/mixins/LoadDataMixin.js";
export default {
  mixins: [LoadDataMixin],
  data() {
    return {
      username: null,
      password: null
    };
  },

  methods: {
    login() {
      this.$store.dispatch("userState/login", {
        username: this.username,
        password: this.password
      });
    }
    // ...mapActions(["loadData"])
  }
};
</script>

<style lang="scss" scoped></style>
