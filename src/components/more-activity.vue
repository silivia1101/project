<template>
  <section class='container-total-box'>
    <section class='cashIng'>
      <img src='static/img/activity/acticity.svg'>
    </section>
    <!--<div class='p-title'>-->
    <!--<p></p>-->
    <!--&lt;!&ndash;<hr>&ndash;&gt;-->
    <!--<span>历史活动</span>-->
    <!--&lt;!&ndash;<p></p>&ndash;&gt;-->
    <!--<hr>-->
    <!--&lt;!&ndash;<img src='img/activity/more.png' alt=''>&ndash;&gt;-->
    <!--</div>-->
    <!--<ul class='box-more-container'>-->
    <!--<li>-->
    <!--<img src='img/activity/img2.png' alt=''>-->
    <!--</li>-->
    <!--</ul>-->
  </section>
</template>

<script>
  export default {
    name: 'more-activity',
    data () {
      return {

      }
    },
    mounted () {
      document.title = '更多活动'
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../static/css/cash-withdrawal.less";
</style>
