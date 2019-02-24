<template>
  <div>
    <div class="banner">
      <p class="logo"></p>
      <p class="menu" id="menu-mini"></p>
    </div>
    <div class="mask layui-anim layui-anim-upbit" id="mask-mini">
      <section>
        <ul>

          <li>
            <p class="logo"></p>
            <span class="close" id="close-mini"></span>
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
</script>

<style scoped>

</style>
