<template>
  <div>
    <ZoneListDraggable :listItems="liveTourZones" @save="onSave" />
    {{ liveTourZones }}
    <BaseFloatingActionButton @click="openAddDialog = true" />
    <AddDialog
      v-model="openAddDialog"
      title="Sceglie il tuo contenuto"
      @done-selection="onDoneSelectionContent"
    >
      <ContentsPage :selectable="true" />
    </AddDialog>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import ZoneListDraggable from "@/components/draggable/ZoneListDraggable.vue";
import AddDialog from "@/components/dialog/AddDialog.vue";

export default {
  name: "EditBaseTour",
  components: {
    ZoneListDraggable,
    AddDialog,
    ContentsPage: () => import("@/views/mainViews/ContentsPage.vue")
  },
  props: {
    idItem: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      openAddDialog: false,
      nameEntity: "liveTourZones"
    };
  },
  created: function() {
    this.$store.dispatch("tourState/fetchEntitiesFiltered", {
      nameEntity: this.nameEntity,
      params: "baseTourId=" + this.idItem
    });
  },

  computed: {
    ...mapGetters("tourState", ["getEntityById"]),
    ...mapState("tourState", ["liveTourZones"]),
    entity() {
      return this.getEntityById({
        nameEntity: "liveTourZones",
        id: this.idItem
      });
    }
  },
  methods: {
    ...mapActions("tourState", ["addEntity", "deleteEntity", "updateEntity"]),
    onDoneSelectionContent(listContents) {
      listContents.forEach(content => {
        let liveTourZone = {
          ContentID: content.id,
          LiveTourID: this.idItem
        };
        this.addEntity({ nameEntity: "liveTourZones", entity: liveTourZone });
      });
      console.log(listContents);
    },
    onSave(listliveTourZones) {
      listliveTourZones.forEach(liveTourZone => {
        this.updateEntity({
          nameEntity: "liveTourZones",
          entity: liveTourZone
        });
      });
    }
  }
};
</script>
