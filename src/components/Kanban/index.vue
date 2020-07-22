<template>
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
        {{ element.name }} {{element.id}}
        <i class="el-icon-delete"  @click="handleRemoveMission(element,$index)"></i>
      </div>
    </draggable>
    <div class="add_new_mission">
        <el-input v-model="mission" />
        <el-button @click="handleAddMission(item)">
          <i class="el-icon-plus"></i>
        </el-button>
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
      mission:'',
    }
  },
  methods: {
    handleAddMission(){
      this.list.push({name: this.mission, id: this.list.length+1})
      this.mission=''
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
<style lang="scss" scoped>
.board-column {
  min-width: 300px;
  min-height: 100px;
  height: auto;
  overflow: hidden;
  background: #f0f0f0;
  border-radius: 3px;

  .board-column-header {
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    padding: 0 20px;
    text-align: center;
    background: #333;
    color: #fff;
    border-radius: 3px 3px 0 0;
  }

  .board-column-content {
    height: auto;
    overflow: hidden;
    border: 10px solid transparent;
    min-height: 60px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;

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
</style>

