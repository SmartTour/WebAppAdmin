<template>
  <div>
    <q-intersection v-bind="$attrs" once transition="scale">
      <slot></slot>
    </q-intersection>
  </div>
</template>

<script>
export default {
  name: "BaseIntersection",
  inheritAttrs: false
};
</script>

<style lang="scss" scoped></style>
