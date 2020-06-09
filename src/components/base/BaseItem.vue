<template>
  <div>
    <q-item clickable v-ripple @click="onClick">
      <q-item-section>
        <q-item-label>{{ label }}</q-item-label>
        <div v-if="value">
          <q-item-label caption>
            {{ value }}
          </q-item-label>
        </div>
      </q-item-section>
    </q-item>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseItem",
  props: {
    label: {
      type: String,
      default: "delete"
    },
    value: {
      default: null
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped></style>
