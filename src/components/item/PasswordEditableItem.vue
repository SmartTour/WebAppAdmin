<template>
  <BaseItem :label="label" :value="passwordOscured" @click="dialogOpen = true">
    <BaseDialog
      v-model="dialogOpen"
      title="Modifica password"
      :closeIcon="false"
      persistent
    >
      <q-form
        @submit.prevent="passwordValidation"
        @reset="resetValues"
        class="q-gutter-md"
      >
        <q-card-section>
          <div class="q-gutter-md ">
            <BasePasswordInput
              v-model="oldPassword"
              label="Vecchia Password"
              lazy-rules
              :rules="[
                val =>
                  (val !== null && val !== '') ||
                  'Bisogna inserire la password corrente',
                val => val == this.value || 'La password corrente è diversa '
              ]"
            />
            <BasePasswordInput
              v-model="newPassword"
              label="Nuova Password"
              lazy-rules
              :rules="[
                val =>
                  (val !== null && val !== '') ||
                  'Bisogna inserire la password nuova',
                val =>
                  val !== this.value ||
                  'La password nuova è uguale a quella corrente'
              ]"
            />

            <BasePasswordInput
              v-model="confirmedPassword"
              label="Conferma Password"
              lazy-rules
              :rules="[
                val =>
                  (val !== null && val !== '') ||
                  'Bisogna inserire la password confermata',
                val =>
                  val == this.newPassword ||
                  'La password nuova è diversa da quella confermata'
              ]"
            />
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            label="Close"
            type="reset"
            color="primary"
            v-close-popup
          />
          <q-btn flat label="Cambia password" type="submit" color="primary" />
        </q-card-actions>
      </q-form>
    </BaseDialog>
  </BaseItem>
</template>

<script>
export default {
  name: "PasswordEditableItem",
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      label: "Password",
      newPassword: null,
      oldPassword: null,
      confirmedPassword: null,
      dialogOpen: false
    };
  },
  methods: {
    passwordValidation() {
      console.log("convalido");
      this.$emit("input", this.newPassword);
      this.dialogOpen = false;
    },
    resetValues() {
      this.newPassword = null;
      this.oldPassword = null;
      this.confirmedPassword = null;
    }
  },
  computed: {
    passwordOscured() {
      let length = this.value.length;
      var oscured = "";
      for (let i = 0; i < length; i++) {
        oscured += "*";
      }
      return oscured;
    }
  }
};
</script>

<style lang="scss" scoped></style>
