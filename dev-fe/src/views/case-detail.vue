<template>
    <div>
      <mini-banner></mini-banner>
      <div class="case-detail">
        <img src="@/assets/imgs/case-detail.jpg" alt="">
      </div>
      <xy-footer></xy-footer>
    </div>
</template>

<script>
import MiniBanner from '../components/mini-banner'
import XyFooter from '../components/footer'
export default {
  components: {
    MiniBanner,
    XyFooter
  }
}
</script>

<style scoped>

</style>
