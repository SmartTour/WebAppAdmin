<template>
  <div class="q-pa-md">
    <q-list bordered padding>
      <q-item-label header>{{ label }} </q-item-label>
      <EditableItem v-model="title" label="Titolo" />
      <EditableItem
        v-model="description"
        label="Descrizione"
        typeInput="textarea"
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
    label: {
      type: String,
      required: true
    },
    nameEntity: {
      type: String,
      defalult: "baseTours"
    },
    idItem: {
      type: Number,
      required: true
    }
  },
  computed: {
    title: {
      get() {
        return this.GETtitle(this.nameEntity, this.idItem);
      },
      set(value) {
        return this.SETtitle(this.nameEntity, value, this.idItem);
      }
    },
    description: {
      get() {
        return this.GETdescription(this.nameEntity, this.idItem);
      },
      set(value) {
        return this.SETdescription(this.nameEntity, value, this.idItem);
      }
    }
  },
  methods: {
    ...mapActions("tourState", ["deleteEntity"]),
    ...mapHandlingFunctions({
      fields: ["title", "description"]
    }),
    onDelete(value) {
      console.log(value);
      if (value) {
        this.deleteEntity({ nameEntity: this.nameEntity, id: this.idItem });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
