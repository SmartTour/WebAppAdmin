<template>
  <div>
    <ArticleEditor
      :oldContent="
        entity.contentHtml == null ? contentHtmlStart : entity.contentHtml
      "
      @on-save="onSaveContent"
    />
  </div>
</template>

<script>
import ArticleEditor from "@/components/editor/ArticleEditor.vue";

export default {
  name: "EditArticleContent",
  components: {
    ArticleEditor
  },
  props: {
    entity: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      contentHtmlStart: "<pre>Scivi il tuo contenuto</pre> "
    };
  },
  methods: {
    onSaveContent(value) {
      this.contentHtml = value;
      this.$emit("change-entity", {
        nameField: "contentHtml",
        valueField: value
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
