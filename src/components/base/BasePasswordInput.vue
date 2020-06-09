<template>
  <div>
    <q-input
      v-bind="$attrs"
      :value="value"
      @input="updateValue"
      filled
      :type="isPwd ? 'password' : 'text'"
      :label="label"
      :maxlength="maxLength"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
      <template v-slot:prepend>
        <q-icon name="vpn_key" />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  base: "BasePasswordInput",
  props: {
    value: {
      type: String
    },
    label: {
      type: String,
      default: "Password"
    }
  },
  data() {
    return {
      isPwd: true,
      maxLength: 14
    };
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style lang="scss" scoped></style>
