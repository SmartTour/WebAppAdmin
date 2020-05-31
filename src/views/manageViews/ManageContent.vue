<template>
  <div>
    <q-tabs v-model="tab" align="justify">
      <q-tab name="edit" icon="edit" />
      <q-tab name="settings" icon="settings" />
    </q-tabs>
    <q-card-section>
      <q-tab-panels v-model="this.tab" animated>
        <q-tab-panel name="edit">
          <div class="q-pa-md">
            <div class="row">
              <div class="col q-pa-md">
                <q-card flat bordered>
                  <q-card-section v-html="contentHtml" />
                </q-card>
              </div>
              <div class="col ">
                <ContentEditorItem
                  :oldContent="contentHtml"
                  @on-save="onSaveContent"
                />
              </div>
            </div>
          </div>
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
    </q-card-section>
  </div>
</template>

<script>
import ContentEditorItem from "@/components/item/ContentEditorItem.vue";
import SettingsItem from "@/components/itemDetail/SettingsItem.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    ContentEditorItem,
    SettingsItem
  },
  props: {
    idItem: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      nameEntity: "contents",
      contentHtml: "",
      tab: "edit"
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
    },
    onSaveContent(value) {
      this.entity.contentHtml = value;
    }
  }
};
</script>

<style lang="scss" scoped></style>
