<template>
  <div class="q-pa-md">
    <q-btn flat dense icon="account_circle">
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column items-center">
            <q-avatar size="72px">
              <!-- <img src="https://cdn.quasar.dev/img/avatar4.jpg" /> -->
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">
              {{ user.firstName }}
              {{ user.lastName }}
            </div>
            <div>
              <q-btn
                flat
                round
                color="primary"
                icon="settings"
                @click="goToSettings"
              />
              <q-btn color="primary" flat round icon="lock" @click="logout" />
            </div>
          </div>
        </div>
      </q-menu>
    </q-btn>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  methods: {
    logout() {
      this.$router.push({
        name: "Login"
      });
      this.$store.dispatch("userState/logout");
    },
    goToSettings() {
      this.$router.push({
        name: "Settings"
      });
    }
  },
  computed: {
    ...mapState("userState", ["user"])
  }
};
</script>
