<template>
  <div>
    <q-tabs v-model="tab" align="justify">
      <q-tab name="edit" icon="edit" />
      <q-tab name="settings" icon="settings" />
    </q-tabs>

    <q-card-section>
      <q-tab-panels v-model="this.tab" animated>
        <q-tab-panel name="edit">
          <EditBaseTour :idItem="idItem" />
        </q-tab-panel>
        <q-tab-panel name="settings">
          <SettingsItem
            :entity="entity"
            label="Base Tour"
            @change-entity="onChange"
            @delete-entity="onDelete"
          />
        </q-tab-panel>
      </q-tab-panels>
    </q-card-section>
  </div>
</template>

<script>
import SettingsItem from "@/components/itemDetail/SettingsItem.vue";

import EditBaseTour from "./edits/EditBaseTour";
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    idItem: {
      type: Number,
      required: true
    }
  },
  components: {
    SettingsItem,
    EditBaseTour
  },
  data() {
    return {
      tab: "edit",
      nameEntity: "baseTours"
    };
  },
  computed: {
    ...mapGetters("tourState", ["getEntityById"]),
    entity() {
      return {
        ...this.getEntityById({
          nameEntity: this.nameEntity,
          id: this.idItem
        })
      };
    }
  },
  methods: {
    ...mapActions("tourState", ["deleteEntity", "updateEntity"]),

    onChange({ nameField, valueField }) {
      let copyOfEntity = { ...this.entity };
      copyOfEntity[nameField] = valueField;
      this.updateEntity({ nameEntity: this.nameEntity, entity: copyOfEntity });
      console.log(copyOfEntity);
    },
    onDelete() {
      this.deleteEntity({ nameEntity: this.nameEntity, id: this.idItem });
    }
  }
};
</script>

<style lang="scss" scoped></style>
