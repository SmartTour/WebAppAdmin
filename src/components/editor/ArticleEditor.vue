<template>
  <div class="q-gutter-sm">
    <q-editor
      v-model="value"
      toolbar-toggle-color="accent"
      toolbar-bg="grey-2"
      :dense="$q.screen.lt.md"
      :definitions="{
        save: {
          tip: 'Salva il tuo contenuto',
          icon: 'save',
          label: 'Save',
          handler: onSave
        },
        addMedia: {
          tip: 'Aggiungi un contenuto multimediale',
          icon: 'add_to_photos',
          label: 'Aggiungi Media',
          handler: onAddMedia
        },
        preview: {
          tip: 'Visualizza anteprima',
          icon: 'visibility',
          handler: onPreview
        }
      }"
      :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['addMedia'],
        [
          ({
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code']
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat')
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['preview', 'save'],
        ['fullscreen', 'viewsource']
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
    />
    <BaseLayoutDialog v-model="openPreviewDialog" title="Anteprima"
      ><PreviewItem :contentHtml="value" align="center"
    /></BaseLayoutDialog>
    <AddDialog
      v-model="openMediaDialog"
      title="Sceglie il tuo media"
      @done-selection="onDoneSelectionMedia"
    >
      <MediaPage :selectable="true" />
    </AddDialog>
    <BaseLayoutDialog v-model="openSettingMedia" title="Aggiungi media">
      <MediaHtmlEditor :listMedia="listMedia" @addMediaHtml="onAddMediaHtml" />
    </BaseLayoutDialog>
  </div>
</template>

<script>
import AddDialog from "@/components/dialog/AddDialog.vue";
import MediaPage from "@/views/mainViews/MediaPage.vue";
import PreviewItem from "@/components/item/PreviewItem.vue";
import MediaHtmlEditor from "@/components/editor/MediaHtmlEditor.vue";

export default {
  name: "ArticleEditor",
  components: {
    AddDialog,
    MediaPage,
    PreviewItem,
    MediaHtmlEditor
  },
  data() {
    return {
      openPreviewDialog: false,
      openMediaDialog: false,
      openSettingMedia: false,
      listMedia: [],
      value: this.oldContent
    };
  },
  props: {
    oldContent: {
      type: String,
      default: "<pre>Scivi il tuo contenuto</pre> "
    },
    canSave: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onSave() {
      this.$emit("on-save", this.value);
    },
    onAddMedia() {
      this.openMediaDialog = true;
    },
    onPreview() {
      this.openPreviewDialog = true;
    },
    onDoneSelectionMedia(listMedia) {
      this.openSettingMedia = true;
      this.listMedia = listMedia;
    },
    onAddMediaHtml(mediaHtml) {
      console.log(mediaHtml);
      this.value += mediaHtml;
      this.openSettingMedia = false;
    }
  }
};
</script>

<style lang="scss" scoped></style>
