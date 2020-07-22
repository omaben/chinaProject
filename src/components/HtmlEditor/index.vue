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
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/javascript-lint'
import 'codemirror/addon/lint/css-lint'
import 'codemirror/addon/hint/html-hint'


export default {
  name: 'HtmlEditor',
  /* eslint-disable vue/require-prop-types */
  props: ['value'],
  data() {
    return {
      HtmlEditor: false
    }
  },
  watch: {
    value(value) {
      const editorValue = this.HtmlEditor.getValue()
      if (value !== editorValue) {
        this.HtmlEditor.setValue(this.value)
      }
    }
  },
  mounted() {
    this.HtmlEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: true,
      mode: 'htmlmixed',
      tags: {
            style: [["type", /^text\/(x-)?scss$/, "text/x-scss"],
                    [null, null, "css"]],
            custom: [[null, null, "customMode"]]
        },
    theme: 'rubyblue',
      lint: true,
      hint: true
    })
    this.HtmlEditor.setValue(this.value)
    this.HtmlEditor.on('change', cm => {
      this.$emit('changed', cm.getValue())
      this.$emit('input', cm.getValue())
    })
  },
  methods: {
    getValue() {
      return this.HtmlEditor.getValue()
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
