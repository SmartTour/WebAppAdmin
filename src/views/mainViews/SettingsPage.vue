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
import { mapFields } from "@/helpers/MapDataHelper.js";
import PasswordEditableItem from "@/components/item/PasswordEditableItem.vue";
import EditableItem from "@/components/item/EditableItem.vue";

export default {
  name: "SettingsPage",
  components: {
    PasswordEditableItem,
    EditableItem
  },
  created: function() {
    this.$store.dispatch("layoutState/updateType", "default");
    this.$store.dispatch("userState/fetchAgency");
  },
  computed: {
    ...mapFields({
      fields: ["firstName", "lastName", "username", "password"],
      nameModule: "userState",
      nameEntity: "user",
      action: "userState/updateUser"
    }),
    ...mapFields({
      fields: ["name", "titleSmartTour"],
      nameModule: "userState",
      nameEntity: "agency",
      action: "userState/updateAgency"
    })
  }
};
</script>
