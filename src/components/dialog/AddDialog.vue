<template>
  <q-dialog
    :value="value"
    @input="updateValue"
    v-bind="$attrs"
    @before-show="onBeforeShow"
    @hide="onHide"
    full-width
    full-height
  >
    <q-layout view="Lhh lpR fff" container class="bg-white">
      <q-header class="bg-primary">
        <q-toolbar>
          <q-toolbar-title>{{ title }}</q-toolbar-title>
          <q-btn flat v-close-popup round dense icon="close" />
        </q-toolbar>
      </q-header>

      <div v-if="selectedList[0]">
        <q-footer class="bg-black text-white">
          <q-toolbar inset>
            <q-toolbar-title>
              <div class="row q-pa-md">
                <div v-for="(selected, index) in selectedList" :key="index">
                  <q-chip color="secondary" text-color="white" icon="art_track">
                    {{ selected.name ? selected.name : selected.title }}
                  </q-chip>
                </div>
              </div>
            </q-toolbar-title>
            <q-btn
              flat
              dense
              icon="send"
              @click="onDoneSelection"
              v-close-popup
            />
          </q-toolbar>
        </q-footer>
      </div>

      <q-page-container>
        <slot></slot>
      </q-page-container>
    </q-layout>
  </q-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AddDialog",
  inheritAttrs: false,
  props: {
    value: {
      type: Boolean
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
    onBeforeShow(evt) {
      this.$store.dispatch("selectableState/clearSelectedList");
      this.$emit("before-show", evt);
    },
    onHide(evt) {
      this.$store.dispatch("selectableState/clearSelectedList");
      this.$emit("hide", evt);
    },
    onDoneSelection() {
      this.$emit("done-selection", this.selectedList);
    }
  },
  computed: {
    ...mapState("selectableState", ["selectedList"])
  }
};
</script>

<style lang="scss" scoped></style>
