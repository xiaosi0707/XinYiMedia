<template>
  <div>
    <div class="banner-index">
      <p class="logo"></p>
      <p class="menu" id="menu"></p>
      <p class="title">
        <span>有限空间  无限设计</span>
        <span>Finite Space, Infinite Design | From XINYI</span>
      </p>
    </div>
    <div class="mask layui-anim layui-anim-upbit" id="mask">
      <section>
        <ul>

          <li>
            <p class="logo"></p>
            <span class="close" id="close"></span>
          </li>
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/case">案例</router-link>
          </li>
          <li>
            <router-link to="/about">关于我们</router-link>
          </li>
          <li>
            <a href="/about">联系我们</a>
          </li>
        </ul>
      </section>
    </div>
  </div>

</template>

<script>

export default {
  mounted () {
    this.$nav()
  }
}

</script>

<style>

</style>
