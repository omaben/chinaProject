<template>
  <div class="app-container">
    <h3>{{ list.title }}</h3>
    <el-row :gutter="20" style="margin-top:50px;">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">
            Objectifs
          </div>
          <div class="box-item">
            <aside style="margin-top:1px;">
              obj1
            </aside>
            <aside style="margin-top:1px;">
              obj1
            </aside>
            <aside style="margin-top:1px;">
              obj1
            </aside>
            <aside style="margin-top:1px;">
              obj1
            </aside>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">
            Benefit
          </div>
          <div class="box-item">
            <aside style="margin-top:1px;">
              obj1
            </aside>
            <aside style="margin-top:1px;">
              obj1
            </aside>
            <aside style="margin-top:1px;">
              obj1
            </aside>
            <aside style="margin-top:1px;">
              obj1
            </aside>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">
            accomplishment
          </div>
          <div class="box-item">
            <aside style="margin-top:15px;">
              Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.
            </aside>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">
            Commentory
          </div>
          <div class="box-item">
            <aside style="margin-top:15px;">
              {{ list.content_short }}
            </aside>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>
<script>
import { fetchProject } from '@/api/project'
import waves from '@/directive/waves' // waves directive
export default {
  name: 'SingleProject',
  directives: { waves },

  data() {
    return {
      list: [],
      project: this.$route.params.id
    }
  },
  created() {
    this.getProject()
  },
  methods: {
    getProject() {
      var id = this.project
      console.log(id)
      fetchProject(this.project).then(response => {
        this.list = response.data
        // Just to simulate the time of the request
      })
    }

  }
}
</script>
<style>
    .el-card__body {
    height: 220px;
    padding: 10px;
    overflow: auto;
}

.el-card__body aside {
    margin: 0;
    padding: 0 10px;
}
</style>
