<template>
  <div>
    <div
      style="height: 560px;max-width: 270px;background-color:rgba(0,0,0,0.1);padding:10px"
    >
      <q-scroll-area
        style="height: 500px;max-width: 250px;background-color:white;"
        :thumb-style="thumbStyle"
      >
        <p>
          <span
            style="max-width: 250px;word-wrap: break-word;"
            v-html="contentHtml"
          />
        </p>
      </q-scroll-area>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreviewItem",
  props: {
    contentHtml: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      thumbStyle: {
        right: "2px",
        borderRadius: "5px",
        backgroundColor: "#027be3",
        width: "5px",
        opacity: 0.75
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
