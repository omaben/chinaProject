<template>
  <div class="json-editor">
    <textarea ref="textarea" />
  </div>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/rubyblue.css'
require('script-loader!jsonlint')
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/javascript-lint'


export default {
  name: 'JSEditor',
  /* eslint-disable vue/require-prop-types */
  props: ['value'],
  data() {
    return {
      JSEditor: false
    }
  },
  watch: {
    value(value) {
      const editorValue = this.JSEditor.getValue()
      if (value !== editorValue) {
        this.JSEditor.setValue(this.value)
      }
    }
  },
  mounted() {
    this.JSEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: true,
       gutters: ['CodeMirror-lint-markers'],
      mode: 'text/javascript',
    theme: 'rubyblue',
      lint: true
    })
    this.JSEditor.setValue(this.value)
    this.JSEditor.on('change', cm => {
      this.$emit('changed', cm.getValue())
      this.$emit('input', cm.getValue())
    })
  },
  methods: {
    getValue() {
      return this.JSEditor.getValue()
    }
  }
}
</script>

<style scoped>
.json-editor{
  height: 100%;
  position: relative;
}
.json-editor >>> .CodeMirror {
  height: auto;
    height: calc(100vh - 84px);}
.json-editor >>> .CodeMirror-scroll{
      height: calc(100vh - 84px);
}
.json-editor >>> .cm-s-rubyblue span.cm-string {
  color: #F08047;
}
</style>
