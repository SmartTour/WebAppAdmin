<template>
  <div>
    <ZoneListDraggable :items="baseTourZones" />
    {{ baseTourZones }}
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
// import ZoneListDraggable from "@/components/draggable/ZoneListDraggable.vue";
import AddDialog from "@/components/dialog/AddDialog.vue";
// import ContentsPage from "@/views/mainViews/ContentsPage.vue";

export default {
  name: "EditBaseTour",
  components: {
    ZoneListDraggable: () =>
      import("@/components/draggable/ZoneListDraggable.vue"),
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
      nameEntity: "baseTourZones"
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
    ...mapState("tourState", ["baseTourZones"]),
    entity() {
      return this.getEntityById({
        nameEntity: "baseTourZones",
        id: this.idItem
      });
    }
  },
  methods: {
    ...mapActions("tourState", ["addEntity", "deleteEntity", "updateEntity"]),
    onDoneSelectionContent(listContents) {
      listContents.map(content => {
        let baseTourZone = {
          ContentID: content.id,
          BaseTourID: this.idItem
        };
        this.addEntity({ nameEntity: "baseTourZones", entity: baseTourZone });
      });
      console.log(listContents);
    }
  }
};
</script>
