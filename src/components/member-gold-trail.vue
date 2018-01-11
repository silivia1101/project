<template>
  <section class='containersBox'>
    <section class='member-header'>
        <img src='static/img/member/img1-1.svg' alt=''>
        <img src='static/img/member/img2-2.svg' alt=''>
    </section>
    <section class='member-body'>
        <h3>等级说明</h3>
        <ul>
            <li>
                1、注册【优学优享】会员后，立即成为黄金会员
            </li>
            <li>
                2、邀请两名学员试听成功，可升级为水晶会员
            </li>
            <li>
                3、黄金会员邀请学员，完成试听课，可获得每人次50元试听奖励
            </li>
            <li>
                4、黄金会员邀请学员，学员成功购课，可获得购课金额的5%佣金奖励（500元封顶）
            </li>
        </ul>
        <div>
            <img src='static/img/member/img3-1.svg' alt=''>
            <img src='static/img/member/img3-2.svg' alt=''>
        </div>
    </section>
</section>
</template>

<script>
export default {
  name: 'member-gold-trail',
  data () {
    return {

    }
  },
  mounted () {
    document.title = '会员等级'
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../static/css/member.less";
</style>
