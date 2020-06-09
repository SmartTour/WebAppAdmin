<template>
  <div v-if="entity">
    <q-card class="my-card">
      <q-card-section horizontal style="padding:10px">
        <q-card-section>
          <q-img
            style="width:150px;height: 100px;"
            class="rounded-borders"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </q-card-section>
        <q-card-section>
          <div class="text-overline text-orange-9">
            {{ entity.id }} {{ entity.type }}
          </div>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ entity.title }}</div>
        </q-card-section>
        <q-space />
        <q-separator vertical />
        <q-card-actions vertical class="justify-around">
          <q-btn
            flat
            round
            color="accent"
            @click="openPreviewDialog = true"
            icon="visibility"
          />
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="primary" icon="edit" />
        </q-card-actions>
      </q-card-section>
    </q-card>
    <BaseLayoutDialog v-model="openPreviewDialog" title="Anteprima"
      ><PreviewItem :contentHtml="entity.contentHtml" align="center"
    /></BaseLayoutDialog>
  </div>
</template>

<script>
import PreviewItem from "@/components/item/PreviewItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "ItemDraggable",
  components: {
    PreviewItem
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      openPreviewDialog: false
    };
  },
  created: function() {
    this.$store.dispatch("tourState/fetchEntities", "contents");
  },
  computed: {
    ...mapGetters("tourState", ["getEntityById"]),
    entity() {
      return this.getEntityById({
        nameEntity: "contents",
        id: this.item.contentID
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>
