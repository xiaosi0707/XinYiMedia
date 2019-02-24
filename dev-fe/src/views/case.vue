<template>
<div>
  <div style="display: none;" id="banner-mini">
    <mini-banner></mini-banner>
  </div>
  <div style="display: block;" id="banner">
    <xy-banner></xy-banner>
  </div>
  <div class="case-center">
    <header class="header">咨询服务 <span>SERVICE</span></header>
    <section class="case-content">
      <dl>
        <dt>
          <img src="@/assets/imgs/case.png" alt="">
        </dt>
        <dd>
          <p>方太新零售消费体验创新咨询</p>
          <span>用户研究｜消费动线研究｜产品策略</span>
        </dd>
      </dl>
    </section>
    <section class="case-content">
      <dl>
        <dt>
          <img src="@/assets/imgs/case.png" alt="">
        </dt>
        <dd>
          <p>方太新零售消费体验创新咨询</p>
          <span>用户研究｜消费动线研究｜产品策略</span>
        </dd>
      </dl>
    </section>
    <section class="case-content">
      <dl>
        <dt>
          <img src="@/assets/imgs/case.png" alt="">
        </dt>
        <dd>
          <p>方太新零售消费体验创新咨询</p>
          <span>用户研究｜消费动线研究｜产品策略</span>
        </dd>
      </dl>
    </section>
  </div>
  <xy-footer></xy-footer>
</div>
</template>

<script>
import XyBanner from '../components/banner'
import MiniBanner from '../components/mini-banner'
import XyFooter from '../components/footer'
export default {
  components: {
    XyBanner,
    MiniBanner,
    XyFooter
  },
  mounted () {
    this.$fixed()
  }
}
</script>

<style scoped>

</style>
