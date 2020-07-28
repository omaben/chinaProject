<template>
  <div class="board-list-wrapper">
    <div class="board-column">
      <div class="board-column-header">
        {{ headerText }}
      </div>
      <draggable
        :list="list"
        v-bind="$attrs"
        class="board-column-content"
        :set-data="setData"
      >
        <div v-for="element in list" :key="element.id" class="board-item">
          {{ element.name }} {{ element.id }}
          <i class="el-icon-delete" @click="handleRemoveMission(element,$index)" />
        </div>
      </draggable>
      <div class="add_new_mission">
        <el-input v-model="mission" placeholder="Add another card" />
        <el-button @click="handleAddMission(item)">
          <i class="el-icon-plus" />
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'DragKanbanDemo',
  components: {
    draggable
  },
  props: {
    headerText: {
      type: String,
      default: 'Header'
    },
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      mission: ''
    }
  },
  methods: {
    handleAddMission() {
      this.list.push({ name: this.mission, id: this.list.length + 1 })
      this.mission = ''
    },
    handleRemoveMission(row, index) {
      this.$notify({
        title: 'Success',
        message: 'Delete Successfully',
        type: 'success',
        duration: 2000
      })
      this.list.splice(row, 1)
    },
    setData(dataTransfer) {
      // to avoid Firefox bug
      // Detail see : https://github.com/RubaXa/Sortable/issues/1012
      dataTransfer.setData('Text', '')
    }
  }
}
</script>
<style lang="scss">

.hasTagsView .app-main{
  min-height: 100vh;
}
.board-column {
  background-color: #ebecf0;
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    position: relative;
    white-space: normal;

  .board-column-header {
    background: transparent!important;
    border-radius: 3px 3px 0 0;
    flex: 0 0 auto;
    padding: 10px 8px;
    position: relative;
    min-height: 20px;
  }

  .board-column-content {
    flex: 1 1 auto;
    margin-bottom: 0;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0 4px;
    padding: 0 4px;
    z-index: 1;
    min-height: 0;

    .board-item {
      cursor: pointer;
      width: 100%;
      height: 64px;
      margin: 5px 0;
      background-color: #fff;
      text-align: left;
      line-height: 54px;
      padding: 5px 10px;
      box-sizing: border-box;
      box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
    }
  }
}
.board-column .board-column-content .board-item i {
    position: absolute;
    right: 5px;
    top: 5px;
    color: red;
}

.add_new_mission input {border-radius: 0;position: relative;}

.add_new_mission button {
    position: absolute;
    z-index: 1;
    right: 0;
    border-radius: 0;
    background: #1f2d3d;
    color: #fff;
    top:0;
}

.add_new_mission {
    position: relative;
}
.board-column .board-column-content .board-item{
    cursor: pointer;
    width: 100%;
    height: 30px;
    margin: 5px 0;
    background-color: #fff;
    text-align: left;
    line-height: 20px;
    padding: 5px 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.2);
    box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.2);
    position: relative;
}
.board-list-wrapper {
    width: 272px;
    margin: 0 4px;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
}

.board-column .board-column-header {
    font-weight: 600;
    padding: 4px 8px;
    max-height: 256px;
    min-height: 20px;
    border-radius: 3px;
    transition-property: background-color,border-color,box-shadow;
    transition-duration: 85ms;
    transition-timing-function: ease;
    overflow: hidden;
    overflow-wrap: break-word;
    font-size: 14px;
    color: #172b4d;
    letter-spacing: 1px;
    text-transform: capitalize;
}
.board-column .board-column-content .board-item {
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(9,30,66,.25);
    cursor: pointer;
    display: block;
    margin-bottom: 8px;
    max-width: 300px;
    min-height: 20px;
    position: relative;
    text-decoration: none;
    z-index: 0;
}

.add_new_mission {
    padding: 0 7px;
    margin-bottom: 5px;
    cursor: pointer;
}

.add_new_mission input.el-input__inner {
    background: transparent;
    border: none;
}

.add_new_mission input.el-input__inner:hover {
    background-color: rgba(9,30,66,.08);
    color: #172b4d;
}

.add_new_mission button {
    right: 8px;
    background: transparent!important;
    border: none;
    color: #1f2d3d!important;
}
</style>

