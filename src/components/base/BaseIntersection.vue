<template>
  <div>
    <q-intersection v-bind="$attrs" once transition="scale">
      <slot></slot>
    </q-intersection>
  </div>
</template>

<script>
export default {
  inheritAttrs: false
};
</script>

<style lang="scss" scoped></style>
