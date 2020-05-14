<template>
  <div>
    <q-card class="my-card" flat bordered>
      <q-img
        :src="require('@/assets/images/' + this.urlImage)"
        :ratio="16 / 9"
        style="height: 300px;"
      />
      <q-card-section>
        <div class="text-overline text-orange-9" v-if="typeItem">
          {{ idItem }} {{ typeItem }}
        </div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ title }}</div>
        <div
          v-if="description != '' && description"
          class="text-caption text-grey"
        >
          {{ description }}
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat color="primary" label="MANAGE" @click="openDialog = true" />
      </q-card-actions>
    </q-card>
    <BaseManageDialog
      v-model="openDialog"
      :title="manageDialogTitle"
      :typeItem="typeItem"
      :idItem="idItem"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      openDialog: false
    };
  },
  props: {
    idItem: {
      type: Number,
      required: true
    },
    title: {
      type: String
    },
    typeItem: {
      type: String
    },
    description: {
      type: String
    },
    urlImage: {
      type: String,
      default: "defaultImmagine.svg"
    },
    manageDialogTitle: {
      type: String,
      required: true
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
