<template>
  <div class="navbar" style="background:#1f2d3d;color:#fff">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <div class="left-menu">
      <template>
        <el-dropdown trigger="click">
          <span>Test</span>
          <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>New File</el-dropdown-item>
              <el-dropdown-item>New Window</el-dropdown-item>
              <el-dropdown-item divided>Open File</el-dropdown-item>
              <el-dropdown-item>Open Folder</el-dropdown-item>
              <el-dropdown-item>Open Workspace</el-dropdown-item>
              <el-dropdown-item>Open Recent</el-dropdown-item>
              <el-dropdown-item divided>Add Folder To Workspace</el-dropdown-item>
              <el-dropdown-item>Save Workspace As</el-dropdown-item>
              <el-dropdown-item divided>Save</el-dropdown-item>
              <el-dropdown-item>Save As</el-dropdown-item>
              <el-dropdown-item>Save All</el-dropdown-item>
              <el-dropdown-item divided>Auto Save</el-dropdown-item>
              <el-dropdown-item>Preferences</el-dropdown-item>
              <el-dropdown-item divided>Revert File</el-dropdown-item>
              <el-dropdown-item>Close Workspace</el-dropdown-item>
              <el-dropdown-item divided @click.native="logout">Exit</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="click">
          <span>Edit</span>
          <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Undo</el-dropdown-item>
              <el-dropdown-item>Redo</el-dropdown-item>
              <el-dropdown-item divided>Cut</el-dropdown-item>
              <el-dropdown-item>Copy</el-dropdown-item>
              <el-dropdown-item>Past</el-dropdown-item>
              <el-dropdown-item divided>Find</el-dropdown-item>
              <el-dropdown-item>Replace</el-dropdown-item>
              <el-dropdown-item divided>Find in Files</el-dropdown-item>
              <el-dropdown-item>Replace in Files</el-dropdown-item>
              <el-dropdown-item divided>Toggle Line Comment</el-dropdown-item>
              <el-dropdown-item>Toggle Block Comment</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="click">
          <span>Selection</span>
          <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Select All</el-dropdown-item>
              <el-dropdown-item>Expend Selection</el-dropdown-item>
              <el-dropdown-item>Shrink Selection</el-dropdown-item>
              <el-dropdown-item divided>Copy Line Up</el-dropdown-item>
              <el-dropdown-item>Copy Line Down</el-dropdown-item>
              <el-dropdown-item>Move Line Up</el-dropdown-item>
              <el-dropdown-item>Move Line Down</el-dropdown-item>
              <el-dropdown-item>Duplicate Selection</el-dropdown-item>
              <el-dropdown-item divided></el-dropdown-item>
              <el-dropdown-item>Add Cursor Above</el-dropdown-item>
              <el-dropdown-item>Add Cursor Below</el-dropdown-item>
              <el-dropdown-item>Add Cursors To Line Ends</el-dropdown-item>
              <el-dropdown-item>Add Next Occurrence</el-dropdown-item>
              <el-dropdown-item>Add Previous Occurrence</el-dropdown-item>
              <el-dropdown-item>Select All Occurrences</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
    </div>
    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <search id="header-search" class="right-menu-item" />

        <error-log class="errLog-container right-menu-item hover-effect" />

        <screenfull id="screenfull" class="right-menu-item hover-effect" />


      </template>

      
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'
import Search from '@/components/HeaderSearch'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    SizeSelect,
    Search
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>

.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .left-menu {
    float: left;
    padding-top: 15px;
    .el-dropdown{
      padding: 0 15px;
      span{
        color:#fff;
        cursor: pointer;

      }
    }
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;


        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
      .svg-icon{
          fill:#fff;
        }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
