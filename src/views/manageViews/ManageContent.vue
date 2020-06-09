<template>
  <div>
    <q-tab-panels v-model="this.tab" animated>
      <q-tab-panel name="edit">
        <component
          v-bind:is="entity.type"
          :entity="entity"
          @change-entity="onChange"
        ></component>
      </q-tab-panel>
      <q-tab-panel name="settings">
        <SettingsItem
          :entity="entity"
          label="Contenuto"
          @change-entity="onChange"
          @delete-entity="onDelete"
        />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import SettingsItem from "@/components/itemDetail/SettingsItem.vue";
import EditArticleContent from "@/components/edits/EditArticleContent.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ManageContent",
  components: {
    SettingsItem,
    Article: EditArticleContent
  },
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
  data() {
    return {
      nameEntity: "contents",
      contentHtml: ""
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
    },
    onDelete() {
      this.deleteEntity({ nameEntity: this.nameEntity, id: this.idItem });
    }
  }
};
</script>

<style lang="scss" scoped></style>
