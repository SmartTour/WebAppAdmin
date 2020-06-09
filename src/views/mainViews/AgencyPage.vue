<template>
  <div>
    <q-page>
      <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-overline">{{ agency.name }}</div>
            <div class="text-h5 q-mt-sm q-mb-xs">
              {{ agency.titleSmartTour }}
            </div>
            <div class="text-h7 q-mt-sm q-mb-xs">Info</div>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            <q-img
              class="rounded-borders"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
          </q-card-section>
        </q-card-section>
        <div v-for="user in agency.users" :key="user.id">
          <q-separator />
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>
                {{ user.firstName }} {{ user.lastName }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-card>
    </q-page>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "AgencyPage",
  created: function() {
    this.$store.dispatch("layoutState/updateType", "default");
    this.$store.dispatch("userState/fetchAgency");
  },

  computed: {
    ...mapState("userState", ["user", "agency"])
  }
};
</script>
