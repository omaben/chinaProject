<template>
  <div class="container">
    <div class="editor-container">
      <html-editor ref="htmlEditor" v-model="value" />
    </div>
  </div>
</template>

<script>
import HtmlEditor from '@/components/HtmlEditor'

const htmlData = '<html></html>'
export default {
  name: 'HtmlEditorDemo',
  components: { HtmlEditor },
  data() {
    return {
      value: htmlData
    }
  }
}
</script>

<style scoped>
.editor-container{
  position: relative;
  height: 100%;
}
</style>

