<template>
  <div>
    <q-tab-panels v-model="tab" animated>
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
  </div>
</template>

<script>
import SettingsItem from "@/components/itemDetail/SettingsItem.vue";

import EditBaseTour from "@/components/edits/EditBaseTour";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ManageBaseTour",
  props: {
    idItem: {
      type: Number,
      required: true
    },
    tab: {
      type: String,
      required: true
    }
  },
  components: {
    SettingsItem,
    EditBaseTour
  },
  data() {
    return {
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
