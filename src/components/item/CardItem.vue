<template>
  <div>
    <q-card class="my-card" flat bordered>
      <q-img
        :src="require('@/assets/images/' + this.imageTyped)"
        :ratio="16 / 9"
        style="height: 300px;"
      />
      <q-card-section>
        <div v-if="typeItem">
          <q-chip text-color="orange-9"> {{ item.id }} {{ typeItem }} </q-chip>
        </div>
        <div v-if="item.type">
          <q-chip text-color="orange-9"> {{ item.type }} </q-chip>
        </div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ item.title }}</div>
        <div class="text-caption text-grey">
          {{ item.description }}
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat color="primary" label="MANAGE" @click="openDialog = true" />
      </q-card-actions>
      <q-item-section avatar v-if="selectable" align="right">
        <q-toggle :value="selected" @input="onSelected" color="accent" />
        <!-- <q-checkbox v-model="check" :val="item.name" color="teal" /> -->
      </q-item-section>
    </q-card>
    <ManageDialog
      v-model="openDialog"
      :title="manageDialogTitle"
      :typeItem="typeItem"
      :idItem="item.id"
    />
  </div>
</template>

<script>
import ManageDialog from "@/components/dialog/ManageDialog.vue";
import { mapActions } from "vuex";

export default {
  name: "CardItem",
  components: {
    ManageDialog
  },
  data() {
    return {
      openDialog: false,
      selected: false
    };
  },
  created: function() {
    this.selected = this.$store.getters["selectableState/isSelected"](
      this.item
    );
  },
  props: {
    item: {
      type: Object,
      required: true
    },

    typeItem: {
      type: String
    },
    urlImage: {
      type: String,
      default: ""
    },
    manageDialogTitle: {
      type: String,
      required: true
    },
    selectable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapActions("selectableState", ["addSelected", "removeSelected"]),
    onSelected(value) {
      console.log(this.item);
      if (value) this.addSelected(this.item);
      else this.removeSelected(this.item);
      this.selected = value;
    }
  },
  computed: {
    imageTyped() {
      return this.typeItem + ".svg";
    }
  }
};
</script>

<style scoped>
.my-card {
  width: 100%;
  min-width: 400px;
}
</style>
