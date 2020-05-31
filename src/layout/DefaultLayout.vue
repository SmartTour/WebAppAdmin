<template>
  <div class="q-pa-md">
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="bg-primary text-white ">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-avatar>
            <img src="../assets/logo.svg" />
          </q-avatar>
          <q-toolbar-title>
            SMART TOUR ADMIN
          </q-toolbar-title>
          <AccountButton />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item
              v-for="item in MainMenuItems"
              :key="item.label"
              clickable
              v-ripple
              :to="{ name: item.namedRoute }"
            >
              <q-item-section avatar>
                <q-icon :name="item.icon" />
              </q-item-section>

              <q-item-section>
                {{ item.label }}
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-ripple @click="$q.fullscreen.toggle()">
              <q-item-section avatar>
                <q-icon
                  :name="
                    $q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'
                  "
                />
              </q-item-section>

              <q-item-section>
                {{
                  $q.fullscreen.isActive ? "schermo piccolo" : "schermo intero"
                }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import MainMenuItems from "../assets/menus/MainMenuItems.json";
import AccountButton from "@/components/AccountButton.vue";
export default {
  components: {
    AccountButton
  },
  data() {
    return {
      drawer: false,
      miniState: true,
      MainMenuItems: MainMenuItems
    };
  },
  methods: {
    logout() {
      this.$router.push({
        name: "Login"
      });
      this.$store.dispatch("userState/logout");
    }
  }
};
</script>
<style lang="scss">
// #page {
//   background-image: url("../assets/backgrounds/login.png");
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
// }
</style>
