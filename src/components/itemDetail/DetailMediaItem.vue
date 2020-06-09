<template>
  <div class="q-pa-md">
    <q-list bordered>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Nome</q-item-label>
          <q-item-label caption>{{ mediaItem.name }} </q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Tipo Media</q-item-label>
          <q-item-label caption>{{ mediaItem.type }} </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced />
      <q-item-label header>General</q-item-label>
      <DeleteItem label="delete" @confirmation-user="onDelete" />
    </q-list>
  </div>
</template>

<script>
import DeleteItem from "@/components/item/DeleteItem.vue";
import { mapActions } from "vuex";
export default {
  name: "DetailMediaItem",
  components: {
    DeleteItem
  },
  props: {
    mediaItem: {
      type: Object,
      required: true
    },
    isExternalMedia: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    ...mapActions("tourState", ["deleteEntity", "deleteInternalMedia"]),
    onDelete(value) {
      console.log(value);
      if (value) {
        if (this.isExternalMedia) {
          this.deleteEntity({
            nameEntity: "externalMedias",
            id: this.mediaItem.id
          });
        } else {
          this.deleteInternalMedia(this.mediaItem.name);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
