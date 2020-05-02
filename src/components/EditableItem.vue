<template>
  <q-item clickable v-ripple>
    <q-item-section>
      <q-item-label>{{ label }}</q-item-label>
      <q-item-label caption>
        {{ newValue }}
      </q-item-label>
    </q-item-section>
    <q-popup-edit
      v-model="newValue"
      buttons
      label-set="Save"
      label-cancel="Close"
      :validate="valueValidation"
      @hide="valueValidation"
    >
      <h4>Modifica {{ label }}</h4>
      <q-input
        outlined
        bottom-slots
        v-model="newValue"
        :label="label"
        dense
        autofocus
        counter
        maxlength="20"
        :error="errorValue"
        :error-message="errorMessageValue"
      >
        <template v-slot:append>
          <q-icon name="close" @click="newValue = ''" class="cursor-pointer" />
        </template>
      </q-input>
    </q-popup-edit>
  </q-item>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      newValue: this.value,
      errorValue: false,
      errorMessageValue: ""
    };
  },
  methods: {
    valueValidation(x) {
      if (x == "") {
        this.errorValue = true;
        this.errorMessageValue =
          "Il campo " + this.label + " non può essere vuoto";
        return false;
      } else if (x != this.value && x != null) {
        console.log("entro x" + x + " value " + this.value);
        this.$emit("input", this.newValue);
        this.$emit("data-change");
      }
      this.errorValue = false;
      this.errorMessageValue = "";

      return true;
    }
  }
};
</script>

<style lang="scss" scoped></style>
