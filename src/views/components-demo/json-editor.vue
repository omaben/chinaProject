<template>
  <div class="container">
    <div class="editor-container">
      <json-editor ref="jsonEditor" v-model="value" />
    </div>
  </div>
</template>

<script>
import JsonEditor from '@/components/JsonEditor'

const jsonData = '[{"items":[{"name":"test1","symbol":"T1"},{"name":"test2","symbol":"T2"}]}]'

export default {
  name: 'JsonEditorDemo',
  components: { JsonEditor },
  data() {
    return {
      value: JSON.parse(jsonData)
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

