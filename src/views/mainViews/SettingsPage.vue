<template>
  <div class="q-pa-md">
    <q-list bordered padding>
      <q-item-label header>User Data </q-item-label>
      <EditableItem v-model="firstName" label="First Name" />
      <EditableItem v-model="lastName" label="Last Name" />
      <EditableItem v-model="username" label="Username" />

      <PasswordEditableItem v-model="password" />

      <q-separator spaced />
      <q-item-label header>Agency Data </q-item-label>
      <EditableItem v-model="name" label="Nome" />
      <EditableItem v-model="titleSmartTour" label="Titolo Smart Tour" />
      <q-separator spaced />
      <q-item-label header>General</q-item-label>
    </q-list>
  </div>
</template>
<script>
import { mapFields } from "@/store/helpers/storeHelpers.js";
import PasswordEditableItem from "@/components/PasswordEditableItem.vue";
import EditableItem from "@/components/EditableItem.vue";

export default {
  components: {
    PasswordEditableItem,
    EditableItem
  },
  beforeCreate() {
    this.$store.dispatch("layoutState/updateType", "default");
  },
  data() {
    return {
      error: false
    };
  },
  computed: {
    ...mapFields({
      fields: ["firstName", "lastName", "username", "password"],
      module: "userState",
      base: "user",
      action: "userState/updateUser"
    }),
    ...mapFields({
      fields: ["name", "titleSmartTour"],
      module: "userState",
      base: "agency",
      action: "userState/updateAgency"
    })
  }
};
</script>
