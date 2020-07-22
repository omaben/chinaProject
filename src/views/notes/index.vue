<template>
    <div class="app-container">
        <div class="filter-container">
             <el-input v-model="listQuery.projects" placeholder="Project Name" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
            <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
                Search
            </el-button>
            <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
                Add
            </el-button>
        </div>
        <div id="boards">
            <div class="board-projects" :key="tableKey" v-for="item in list" v-loading="listLoading" >
                <div class="icon-action">
                    <i class="el-icon-edit" @click="handleUpdate(item)"></i>
                    <i class="el-icon-edit" @click="handleUpdate(item)"></i>
                    <i class="el-icon-edit" @click="handleDelete(item,$index)"></i>
                    <svg-icon v-if="item.importance===0" icon-class="star" class="meta-item__icon" />
                </div>
                <h2>{{item.projects}}</h2>
                <p class="description">{{item.description}}</p>
                <div class="team-tasks" v-for="team in item.team">{{team}}</div>
            </div>
        </div>
         <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="150px" style="width: 400px; margin-left:50px;">
        
        <el-form-item label="Date" prop="timestamp">
          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick a date" />
        </el-form-item>
        
        
        <el-form-item label="Project">
          <el-select v-model="temp.projects" style="width: 100%" class="filter-item" @change="handleFilter">
            <el-option v-for="item in projects" :key="item" :label="item" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item label="Teams">
          <el-select multiple v-model="temp.team" style="width: 100%" class="filter-item" @change="handleFilter">
            <el-option  v-for="item in teams" :key="item" :label="item" :value="item" />
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="Importance">
          <el-rate v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"  :max="2" style="margin-top:8px;" />
        </el-form-item> -->
        <el-form-item label="Description">
          <el-input v-model="temp.description" :autosize="{ minRows: 2, maxRows: 4}" type="textarea" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          Cancel
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
          Confirm
        </el-button>
      </div>
    </el-dialog>
    </div>
</template>
<style>
    .board-projects {
    display: inline-block;
    width: 250px;
    height: 140px;
    border: 1px solid #ddd;
    margin-left: 10px;
    margin-right: 10px;
    padding: 0;
    position: relative;
    margin-bottom: 10px;
    cursor: pointer;
}

.board-projects svg.svg-icon {
   
    color: red;
}

.board-projects h2 {
    background: #ddd;
    margin: 0;
    padding: 5px;
    text-align: left;
    font-size: 13pt;
}

.board-projects p.description {
    padding: 0 10px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
}

.board-projects .team-tasks {
    margin-left: 5px;
    margin-right: 5px;
    background: green;
    width: 20px;
    display: inline-block;
    height: 20px;
    border-radius: 50%;
    padding: 4px;
    color: #fff;
    font-size: 8pt;
}

div#boards {
    text-align: center;
}

.board-projects:hover {
    background: #eee;
}
.icon-action {
    position: absolute;
    right: 5px;
    top: 5px;
}
</style>
<script>
import { fetchList, fetchPv, createTask, updateTask } from '@/api/task'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import Project from '../projects' // secondary package based on el-pagination

const calendarTypeOptions = [
  { key: 'CN', display_name: 'China' },
  { key: 'US', display_name: 'USA' },
  { key: 'JP', display_name: 'Japan' },
  { key: 'EU', display_name: 'Eurozone' }
]

// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
  name: 'ComplexTable',
  components: { Pagination,Project },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  data() {
    return {
      projects:['Project1', 'Project2', 'Project3', 'Project4'],
      teams:['T1', 'T2', 'T3', 'T4'],
      projectTitle:'',
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        projects: undefined,
        description: undefined,
        sort: '+id'
      },
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      dialogProjectVisible:false,
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit Notes',
        create: 'New Notes'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      },
      downloadLoading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        description: '',
        timestamp: new Date(),
        title: '',
        projects:'',
        status: 'published',
        team: []
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
          this.temp.author = 'vue-element-admin'
          createTask(this.temp).then(() => {
            this.list.unshift(this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Created Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleProject(row){
      this.projectTitle='Projects do by :'+row.title;
      this.dialogProjectVisible = true
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updateTask(tempData).then(() => {
            const index = this.list.findIndex(v => v.id === this.temp.id)
            this.list.splice(index, 1, this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Update Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleDelete(row, index) {
      this.$notify({
        title: 'Success',
        message: 'Delete Successfully',
        type: 'success',
        duration: 2000
      })
      this.list.splice(index, 1)
    },
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        this.pvData = response.data.pvData
        this.dialogPvVisible = true
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
        const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
        const data = this.formatJson(filterVal)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal) {
      return this.list.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    }
  }
}
</script>