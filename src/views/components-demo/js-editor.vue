<template>
  <div class="container">
    <div class="editor-container">
      <js-editor ref="JSEditor" v-model="value" />
    </div>
  </div>
</template>

<script>
import JsEditor from '@/components/JSEditor'

const JSData = 'var test = 0;'
export default {
  name: 'JSEditorDemo',
  components: { JsEditor },
  data() {
    return {
      value: JSData
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

