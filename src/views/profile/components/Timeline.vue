<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item v-for="(item,index) of timeline" :key="index" :timestamp="item.timestamp" placement="top">
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        {
          timestamp: '2019/4/20',
          title: 'test',
          content: 'spam test'
        },
        {
          timestamp: '2019/4/21',
          title: 'test',
          content: 'spam test'
        },
        {
          timestamp: '2019/4/22',
          title: 'test',
          content: 'spam test'
        },
        {
          timestamp: '2019/4/23',
          title: 'test',
          content: 'spam test'
        }
      ]
    }
  }
}
</script>
