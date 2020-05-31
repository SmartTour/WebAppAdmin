<template>
  <q-dialog
    v-bind="$attrs"
    :value="value"
    @input="updateValue"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card class="bg-warning text-white" style="width: 300px">
      <q-card-section align="center">
        <div class="text-h6">Sei sicuro?</div>
      </q-card-section>

      <q-card-actions align="center" class="bg-white text-teal">
        <q-btn flat label="Sì" @click="onYes" v-close-popup />
        <q-btn flat label="No" @click="onNo" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: Boolean
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
    onYes() {
      this.$emit("confirmation-user", true);
    },
    onNo() {
      this.$emit("confirmation-user", false);
    }
  }
};
</script>

<style lang="scss" scoped></style>
