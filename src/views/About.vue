<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>测试{{message}}</h2>
    <h3>{{handleText}}</h3>
  </div>
</template>

<script>
export default {
  data () {
    console.log('1')
    return {
      message: 'Test data'
    }
  },
  computed: {
    handleText: function () {
      console.log('2')
      return 2;
    }
  },
}
</script>
