<template>
  <q-card class="my-card fixed-center q-pa-md">
    <q-card-section>
      <div class="text-h6">LOGIN</div>
    </q-card-section>

    <q-card-section>
      <div class="q-pa-md" style="min-width: 250px">
        <q-form @submit.prevent="login" class="q-gutter-md">
          <q-input
            color="teal"
            filled
            v-model="username"
            label="username"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type something']"
          >
            <template v-slot:prepend>
              <q-icon name="account_box" />
            </template>
          </q-input>

          <q-input
            color="teal"
            v-model="password"
            label="password"
            filled
            :type="isPwd ? 'password' : 'text'"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type something']"
          >
            <template v-slot:prepend>
              <q-icon name="vpn_key" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <div>
            <q-btn
              :loading="loading"
              label="Login"
              type="submit"
              color="primary"
            >
              <template v-slot:loading>
                <q-spinner-radio />
              </template>
            </q-btn>
          </div>
        </q-form>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: null,
      password: null,
      isPwd: true,
      loading: false
    };
  },

  methods: {
    login() {
      this.loading = true;
      this.$store
        .dispatch("userState/login", {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.loading = false;
          this.$router.push({
            name: "Agency"
          });
        })
        .catch(err => {
          this.loading = false;
          let errorMessage = err.response
            ? err.response.data.message
            : "server al momento non disponibile";
          this.$q.notify({
            type: "negative",
            message: errorMessage
          });
        });
    },
    ...mapActions(["loadData"])
  }
};
</script>

<style lang="scss" scoped></style>
