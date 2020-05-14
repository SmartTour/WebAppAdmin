<template>
  <div class="q-pa-md">
    <q-list bordered padding>
      <q-item-label header>Base Tour </q-item-label>
      <EditableItem v-model="title" label="Titolo" />
      <EditableItem
        v-model="description"
        label="Descrizione"
        :isTextarea="true"
      />

      <q-separator spaced />
      <q-item-label header>Visibility</q-item-label>
      <DeleteItem label="delete" @confirmation-user="onDelete" />
    </q-list>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapHandlingFunctions } from "@/store/helpers/storeHelpers.js";
import DeleteItem from "@/components/DeleteItem.vue";

import EditableItem from "@/components/EditableItem.vue";
export default {
  components: {
    EditableItem,
    DeleteItem
  },
  props: {
    idItem: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      newTour: this.baseTour
    };
  },
  computed: {
    title: {
      get() {
        return this.Gettitle(this.idItem);
      },
      set(value) {
        return this.Settitle(value, this.idItem);
      }
    },
    description: {
      get() {
        return this.Getdescription(this.idItem);
      },
      set(value) {
        return this.Setdescription(value, this.idItem);
      }
    }
  },
  methods: {
    ...mapActions("tourState", ["deleteBaseTour"]),
    ...mapHandlingFunctions({
      fields: ["title", "description"],
      getterReference: "tourState/getBaseById",
      actionOnSetReference: "tourState/updateBaseTour"
    }),
    onDelete(value) {
      console.log(value);
      if (value) {
        this.deleteBaseTour(this.idItem);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
