<template>
  <div class="q-pa-md">
    <q-list bordered padding>
      <q-item-label header>User Data </q-item-label>

      <EditableItem
        v-on:data-change="updateUserToStore"
        v-model="user.firstName"
        label="First Name"
      />
      <EditableItem
        v-on:data-change="updateUserToStore"
        v-model="user.lastName"
        label="Last Name"
      />

      <EditableItem
        v-on:data-change="updateUserToStore"
        v-model="user.username"
        label="Username"
      />

      <EditableItem
        v-on:data-change="updateUserToStore"
        v-model="user.password"
        label="Password"
      />

      <q-separator spaced />
      <q-item-label header>General</q-item-label>
    </q-list>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import EditableItem from "@/components/EditableItem.vue";
export default {
  components: {
    EditableItem
  },
  beforeCreate() {
    this.$store.dispatch("layoutState/updateType", "default");
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("userState", ["user"])
  },
  methods: {
    ...mapActions("userState", ["updateUser"]),
    updateUserToStore() {
      console.log("devo aggiornare l'utente " + this.user);
      this.$q.loading.show();
      this.updateUser(this.user)
        .then(() => {
          this.$q.loading.hide();
          this.$q.notify({
            type: "positive",
            message: "done"
          });
        })
        .catch(err => {
          this.$q.loading.hide();
          let errorMessage = err.response
            ? err.response.data.message
            : "server al momento non disponibile";
          this.$q.notify({
            type: "negative",
            message: errorMessage
          });
        });
    }
  }
};
</script>
