<template>
  <div>
    <q-tab-panels v-model="this.tab" animated>
      <q-tab-panel name="edit">
        <EditLiveTour :idItem="idItem" />
      </q-tab-panel>
      <q-tab-panel name="settings">
        <SettingsItem
          :entity="entity"
          label="Live Tour"
          @change-entity="onChange"
          @delete-entity="onDelete"
        />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import SettingsItem from "@/components/itemDetail/SettingsItem.vue";
import EditLiveTour from "@/components/edits/EditLiveTour";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ManageLiveTour",
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
    EditLiveTour
  },
  data() {
    return {
      nameEntity: "liveTours"
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
