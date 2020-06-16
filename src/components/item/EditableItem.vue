<template>
  <BaseItem :label="label" :value="value" @click="dialogOpen = true">
    <BaseDialog
      v-model="dialogOpen"
      :title="titleDialog"
      @before-show="onBeforeShow"
    >
      <q-form @submit.prevent="onSubmit" class="q-gutter-md">
        <q-card-section>
          <BaseInput
            :type="typeInput"
            :maxLength="maxLength"
            v-model="newValue"
            :label="label"
            lazy-rules
            :rules="[
              val =>
                (val !== null && val !== '') ||
                this.label + ' non può essere vuoto',
              val => val !== this.value || 'é uguale al dato corrente'
            ]"
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Salva" type="submit" color="primary" />
        </q-card-actions>
      </q-form>
    </BaseDialog>
  </BaseItem>
</template>

<script>
export default {
  name: "EditableItem",
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    typeInput: {
      type: String,
      default: "text"
    }
  },
  data() {
    return {
      newValue: this.value,
      dialogOpen: false
    };
  },
  methods: {
    onSubmit() {
      this.$emit("input", this.newValue);
      this.dialogOpen = false;
    },
    onBeforeShow() {
      console.log("ciao ");
      this.newValue = this.value;
    }
  },
  computed: {
    titleDialog() {
      return "Modifica " + this.label;
    },
    maxLength() {
      if (this.typeInput == "textarea" || this.typeInput == "url") return 500;
      return 20;
    }
  }
};
</script>

<style lang="scss" scoped></style>
