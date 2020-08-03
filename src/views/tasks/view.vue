<template>
  <div class="task_prjects">
    <div class="top_task">
      <h2>Project1 <span><svg-icon icon-class="star" class="meta-item__icon" /></span></h2>
      <el-button>
        Add to team
      </el-button>
      <el-button>
        Invite user
      </el-button>
      <div class="user_top">
        <img src="@/assets/img/backTask.jpeg" alt="404" title="user1">
        <img src="@/assets/img/backTask.jpeg" alt="404" title="user2">
        <img src="@/assets/img/backTask.jpeg" alt="404" title="user3">
        <img src="@/assets/img/backTask.jpeg" alt="404" title="user4">
      </div>
      <el-button class="activity_task" @click="showActivities()">
        Show Activities
      </el-button>
    </div>
    <div class="activities_task" :class="{'showActivity':showActivity}">
      <h2>Activity <i class="el-icon-close" @click="showActivities()" /></h2>
      <div class="team_activ_bloc">
        <div class="team_activity">
          <img src="@/assets/img/backTask.jpeg" alt="404" title="user1">
          <div class="text_activity">
            <p>
              invited an unconfirmed member to this board
            </p>
            <span>Jully 10, 2020 at 11:43 PM</span>
          </div>
        </div>
        <div class="team_activity">
          <img src="@/assets/img/backTask.jpeg" alt="404" title="user1">
          <div class="text_activity">
            <p>
              invited an unconfirmed member to this board
            </p>
            <span>Jully 10, 2020 at 11:43 PM</span>
          </div>
        </div>
        <div class="team_activity">
          <img src="@/assets/img/backTask.jpeg" alt="404" title="user1">
          <div class="text_activity">
            <p>
              invited an unconfirmed member to this board
            </p>
            <span>Jully 10, 2020 at 11:43 PM</span>
          </div>
        </div>
        <div class="team_activity">
          <img src="@/assets/img/backTask.jpeg" alt="404" title="user1">
          <div class="text_activity">
            <p>
              invited an unconfirmed member to this board
            </p>
            <span>Jully 10, 2020 at 11:43 PM</span>
          </div>
        </div>
      </div>

    </div>
    <div class="pic-task" />
    <div class="components-container board">

      <Kanban :key="1" :list="list1" :group="group" class="kanban todo" header-text="Todo" />
      <Kanban :key="2" :list="list2" :group="group" class="kanban working" header-text="Working" />
      <Kanban :key="3" :list="list3" :group="group" class="kanban done" header-text="Done" />
      <Kanban :key="4" :list="list4" :group="group" class="kanban Verified" header-text="Verified" />
      <div class="board-list-wrapper">
        <div class="board-column">
          <div class="board-column-header">
            <div class="add_new_mission">
              <el-input v-model="mission" placeholder="Add another list" />
              <el-button @click="handleAddMission(item)">
                <i class="el-icon-plus" />
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Kanban from '@/components/Kanban'

export default {
  name: 'DragKanbanDemo',
  components: {
    Kanban
  },
  data() {
    return {
      showActivity: false,
      mission: '',
      image: 'backTask.jpeg',
      group: 'mission',
      list1: [
        { name: 'Mission', id: 1 },
        { name: 'Mission', id: 2 },
        { name: 'Mission', id: 3 },
        { name: 'Mission', id: 4 }
      ],
      list2: [
        { name: 'Mission', id: 5 },
        { name: 'Mission', id: 6 },
        { name: 'Mission', id: 7 }
      ],
      list3: [
        { name: 'Mission', id: 8 },
        { name: 'Mission', id: 9 },
        { name: 'Mission', id: 10 }
      ],
      list4: [
        { name: 'Mission', id: 8 },
        { name: 'Mission', id: 9 },
        { name: 'Mission', id: 10 }
      ]
    }
  },
  methods: {
    showActivities() {
      this.showActivity = !this.showActivity
    }
  }
}
</script>
<style lang="scss">
.board {
  width: 1000px;
  margin-left: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-start;
}
.kanban {
  &.todo {
    .board-column-header {
      background: #4A9FF9;
    }
  }
  &.working {
    .board-column-header {
      background: #f9944a;
    }
  }
  &.done {
    .board-column-header {
      background: #2ac06d;
    }
  }
}
.board {
    width: 1300px;
    margin-left: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}
.components-container.board  {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    margin-bottom: 8px;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 8px;
    position: absolute;
    margin: 0;
    top: 150px;
    right: 0px;
    bottom: 0;
    left: 0px;
    width: auto;
    display: initial;
    padding: 16px;
}
.add_new_mission input.el-input__inner {
    background: transparent;
    border: none;
}
.pic-task {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #c0c4cc9c;
}
.top_task h2 {
    display: initial;
    color: #172b4d;
    cursor: default;
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
    padding: 0;
    text-decoration: none;
    max-width: calc(100% - 24px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    padding-right: 10px;
    margin-right: 7px;
}
.top_task h2 span {
    background-color: rgba(0,0,0,0.16);
    height: pa;
    padding: 10px;
    border-radius: 5px;
    font-size: 11pt;
    margin-left: 20px;
    color: yellow;
}
.top_task h2:after {content: '';height: 23px;width: 1px;background: rgba(0,0,0,.2);position: absolute;right: 0;top: 0;}

.top_task .el-button {background-color: rgba(0,0,0,.08);border: none;color: #172b4d;font-weight: 400;font-size: 14px;position: relative;margin-right: 10px;}

.top_task .el-button:after {
    content: '';
    height: 23px;
    width: 1px;
    background: rgba(0,0,0,.2);
    position: absolute;
    right: -10px;
    top: 6px;
}

.user_top img {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    line-height: 30px;
    margin: 0 0 0 -10px;
    position: relative;
    cursor:pointer;
    z-index:1;
}

.user_top {
    display: inline;
    /* margin-top: 10px; */
    margin-left: 11px;
    position: relative;
    top: 7px;
}

.user_top img:hover:after {
    background-color: #000;
    content: '';
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

.top_task {
    margin-bottom: 16px;
}
.components-container.board::-webkit-scrollbar {
    width: .1em;
    height: .5em;
}

.components-container.board::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.components-container.board::-webkit-scrollbar-thumb {
    background-color: #1f2d3d;
    outline: 1px solid slategrey;
}
.top_task {
    background: #c0c4cca6;
    padding: 10px 20px;
    z-index: 1;
    position: relative;
}
.top_task .el-button.activity_task {
    float: right;
    top: 11px;
}

.top_task .el-button.activity_task:after {
    display: none;
}
</style>

