<template>
  <div class="q-pa-md">
    <q-list bordered padding>
      <q-item-label header>{{ label }} </q-item-label>
      <EditableItem
        :value="entity.title"
        @input="onChangeTitle"
        label="Titolo"
      />
      <EditableItem
        v-if="entity.description"
        :value="entity.description"
        @input="onChangeDescription"
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
import DeleteItem from "@/components/item/DeleteItem.vue";
import EditableItem from "@/components/item/EditableItem.vue";
export default {
  name: "SettingsItem",
  components: {
    EditableItem,
    DeleteItem
  },
  props: {
    label: {
      type: String,
      required: true
    },
    entity: {
      type: Object,
      required: true
    }
  },
  methods: {
    onChangeTitle(value) {
      this.$emit("change-entity", { nameField: "title", valueField: value });
    },
    onChangeDescription(value) {
      this.$emit("change-entity", {
        nameField: "description",
        valueField: value
      });
    },
    onDelete(value) {
      console.log(value);
      if (value) {
        this.$emit("delete-entity");
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
