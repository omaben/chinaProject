<template>
  <div class="app-container">
    <h3>{{ list.title }}</h3>
    <el-row :gutter="20" style="margin-top:50px;">
      <el-col :span="18" style="margin-top:15px;">
        <el-card class="box-card charts">
          <div slot="header">
            Statistics Project
          </div>
          <div class="box-item ">
            <chart height="100%" width="100%" />
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" style="margin-top:15px;">
        <h3 class="Status_Project">Project Status <span>{{ list.status }}</span></h3>
      </el-col>
      <el-col :span="6" style="margin-top:15px;">
        <el-card class="box-card right_info">
          <div slot="header">
            Objectifs
          </div>
          <div class="box-item ">
            <p>{{ list.objectif }}</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" style="margin-top:15px;">
        <el-card class="box-card right_info">
          <div slot="header">
            Benifit
          </div>
          <div class="box-item ">
            <p>{{ list.benifit }}</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" style="margin-top:15px;">
        <el-card class="box-card right_info">
          <div slot="header">
            accomplishment
          </div>
          <div class="box-item">
            <p>{{ list.accomplishments }}</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" style="margin-top:15px;">
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

      <el-col :span="6" style="margin-top:15px;">
        <el-card class="box-card right_info auto-height more_Information">
          <div slot="header">
            StakHolders
          </div>
          <div class="box-item">
            <p>
              Sponsor Organisation: <span>{{ list.organisation }}</span>
            </p>
            <p>
              start Project: <span>{{ list.display_time }}</span>
            </p>
            <p>
              finish project : <span>{{ list.display_time }}</span>
            </p>
            <p>
              Initial Sponsor: <span>{{ list.initial_Sponsor }}</span>
            </p>
            <p>
              Initial Owner: <span>{{ list.initial_Owner }}</span>
            </p>
            <p>
              Initial Manager: <span>{{ list.initial_Manager }}</span>
            </p>
            <p>
              IT Manager: <span>{{ list.it_Manager }}</span>
            </p>
            <p>
              Project Office: <span>{{ list.project_office }}</span>
            </p>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>
<script>
import { fetchProject } from '@/api/project'
import Chart from '@/components/Charts/MixChart'
import waves from '@/directive/waves' // waves directive
export default {
  name: 'SingleProject',
  directives: { waves },
  components: { Chart },
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
    .el-card__body{
    height: 220px;
    padding: 10px;
    overflow: auto;
}
.charts .el-card__body  {
    height: 500px;

}

.el-card__body aside {
    margin: 0;
    padding: 0 10px;
}
.el-card__body .box-item {
    height: calc(100% - 5px);
}
.right_info .el-card__body {
    height: 96px;
    overflow: hidden;
    background: #a21616;
    color: #fff;
}

.right_info .el-card__header {
    background: #009688;
    color: #fff;
}

h3.Status_Project {
    text-align: center;
    font-style: italic;
    font-weight: inherit;
}

h3.Status_Project span {
    font-weight: bold;
    color: #FF5722;
}
.right_info .el-card__body {
    height: 96px;
    overflow: hidden;
    background: #a21616;
    color: #fff;
}

.right_info .el-card__header {
    background: #009688;
    color: #fff;
}

h3.Status_Project {
    text-align: center;
    font-style: italic;
    font-weight: inherit;
}

h3.Status_Project span {
    font-weight: bold;
    color: #FF5722;
}

.el-card__body .box-item svg.svg-icon {
    /* position: absolute; */
    float: right;
    margin-top: 11px;
    color: #6464e8;
}
.auto-height.right_info .el-card__body {
    height: auto;
}
.auto-height.right_info .el-card__body {
    height: auto;
}

.more_Information  p {
    text-transform: uppercase;
    font-size: 10pt;
}

.more_Information p span {
    font-weight: bold;
    color: #FFC107;
}
</style>
