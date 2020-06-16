<template>
  <div class="q-pa-md">
    <q-list bordered>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Order</q-item-label>
          <q-item-label caption>{{ zoneItem.order }} </q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Tipo Zone</q-item-label>
          <q-item-label caption>
            {{ isLive ? "liveTourZones" : "baseTourZones" }}</q-item-label
          >
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
  name: "DetailZoneItem",
  components: {
    DeleteItem
  },
  props: {
    zoneItem: {
      type: Object,
      required: true
    },
    isLive: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    ...mapActions("tourState", ["deleteEntity", "updateEntity"]),
    onDelete(value) {
      console.log(value);
      if (value) {
        this.deleteEntity({
          nameEntity: this.isLive ? "liveTourZones" : "baseTourZones",
          id: this.zoneItem.id
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
