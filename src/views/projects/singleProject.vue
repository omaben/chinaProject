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
            Last Issues
          </div>
          <div class="box-item">
            <aside style="margin-top:1px;">
              issues1 <svg-icon icon-class="eye-open" />
            </aside>
            <aside style="margin-top:1px;">
              issues1 <svg-icon icon-class="eye-open" />
            </aside>
            <aside style="margin-top:1px;">
              issues1 <svg-icon icon-class="eye-open" />
            </aside>
            <aside style="margin-top:1px;">
              issues1 <svg-icon icon-class="eye-open" />
            </aside>
            <aside style="margin-top:1px;">
              issues1 <svg-icon icon-class="eye-open" />
            </aside>
          </div>
        </el-card>

      </el-col>
      <el-col :span="12" style="margin-top:15px;">
        <el-card class="box-card">
          <div slot="header">
            Teams
          </div>
          <div class="box-item">
            <aside style="margin-top:1px;">
              Team1: description1 <svg-icon icon-class="eye-open" />
            </aside>
            <aside style="margin-top:1px;">
              Team1: description1 <svg-icon icon-class="eye-open" />
            </aside>
            <aside style="margin-top:1px;">
              Team1: description1 <svg-icon icon-class="eye-open" />
            </aside>
            <aside style="margin-top:1px;">
              Team1: description1 <svg-icon icon-class="eye-open" />
            </aside>
            <aside style="margin-top:1px;">
              Team1: description1 <svg-icon icon-class="eye-open" />
            </aside>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" style="margin-top:15px;">
        <el-card class="box-card">
          <div slot="header">
            StakHolders
          </div>
          <div class="box-item">
            <aside style="margin-top:15px;">
              Sponsor Organisation: company1
            </aside>
            <aside style="margin-top:15px;">
              start Project: 14/07/2020
            </aside>
            <aside style="margin-top:15px;">
              finish project : 1year
            </aside>
            <aside style="margin-top:15px;">
              .
            </aside>
            <aside style="margin-top:15px;">
              .
            </aside>
            <aside style="margin-top:15px;">
              .
            </aside>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" style="margin-top:15px;">
        <el-card class="box-card">
          <div slot="header">
            Last Notes
          </div>
          <div class="box-item">
            <aside style="margin-top:1px;">
              Notes <svg-icon icon-class="eye-open" />
            </aside>
            <aside style="margin-top:1px;">
              Notes <svg-icon icon-class="eye-open" />
            </aside>
            <aside style="margin-top:1px;">
              Notes <svg-icon icon-class="eye-open" />
            </aside>
            <aside style="margin-top:1px;">
              Notes <svg-icon icon-class="eye-open" />
            </aside>
            <aside style="margin-top:1px;">
              Notes <svg-icon icon-class="eye-open" />
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
