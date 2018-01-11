<template>
  <section class='containersBox'>
    <section class='member-header'>
        <img src='static/img/member/img1-2.svg' alt=''>
        <img src='static/img/member/img2-3.svg' alt=''>
    </section>
    <section class='member-body'>
        <h3>等级说明</h3>
        <ul>
            <li>
                1、拥有2个成功试听的学员，立即升级为水晶会员/理优在读学员注册会员，立即成为水晶会员
            </li>
            <li>
                2、水晶会员邀请学员，完成试听课，可获得每人次50元试听奖励；学员成功购课，可获得学员购课金额10%佣金奖励（1000元封顶）
            </li>
            <li>
                3、水晶会员邀请其他会员，其他会员邀请学员，学员完成试听课，水晶会员可获得每人次25元试听奖励；成功购课可获得购课金额5%佣金奖励（500元封顶）
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
  name: 'member-diamond',
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
