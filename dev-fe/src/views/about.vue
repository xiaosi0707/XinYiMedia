<template>
  <div>
    <mini-banner></mini-banner>
    <div class="about">
      <section>
        <h2>About 新逸 & 关于</h2>
        <p>新逸传播（US）</p>
        <p>既是设计公司，也是传媒公司，传说中的乙方。</p>
        <p>公司组建2015年，成立2018年，</p>
        <p>从印刷设计，到品牌设计，到广告传媒</p>
        <p>从排版，到创意，从标志设计延展到品牌全方位传播，</p>
        <p>塑造了上百个品牌，全面服务过上百家企业。</p>
        <p>我们不断进化，不断与时俱进，不断自我超越。</p>
        <p>2019，新逸传播带着全新的思路再次出发，</p>
      </section>
    </div>
    <div class="form" id="form">
      <h1>合作咨询<small>(以下内容均为必填)</small></h1>
      <form name="form" action="http://localhost:7000/about" method="post" @submit="checkForm">
        <p>
          <input type="text" v-model.trim="user.name" name="name" placeholder="姓名" @input="checkName" />
          <i id="name">姓名不能为空</i>
        </p>
        <p>
          <input type="text" name="company" v-model.trim="user.company" placeholder="公司" @input="checkCompany"/>
          <i id="company">公司不能为空</i>
        </p>
        <p>
          <input type="tel" placeholder="电话" v-model.trim="user.tel" name="tel" maxlength="11" @input="checkTel" />
          <i id="tel">电话号码不能为空</i>
        </p>
        <p>
          <input type="email" placeholder="邮箱" v-model.trim="user.email" name="email" @input="checkEmail" />
          <i id="email">邮箱不能为空</i>
        </p>
        <p>
          <textarea cols="3" placeholder="请填写您咨询的内容" v-model.trim="user.content" name="content" @input="checkContent"></textarea>
          <i id="content">咨询内容不能为空</i>
        </p>
        <p>
          <input value="提交" type="submit" />
        </p>
      </form>
    </div>
    <div class="contact">
      <p>或者您通过下列方式联系我们</p>
      <ul>
        <li>
          <u>Contact</u>
        </li>

        <li>
          <span>商务电话</span>
          <a href="tel:135-8151-7577" class="tel">135-8151-7577</a>
        </li>
        <li>
          <span>商务邮箱</span>
          <a href="mailto:gemini_0602@163.com" class="mail">gemini_0602@163.com</a>
        </li>
        <li>
          <a href="#form" class="ask">在线设计咨询</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import MiniBanner from '../components/mini-banner'
export default {
  components: {
    MiniBanner
  },
  data () {
    return {
      user: {
        name: '',
        company: '',
        tel: '',
        email: '',
        content: ''
      }
    }
  },
  created () {
  },
  mounted () {
    this.$nav()
  },
  methods:{
    checkName () {
      let name = document.getElementById('name')
      let check = false
      if (!this.user.name) {
        name.style.display = 'block'
        check = false
      } else {
        name.style.display = 'none'
        check = true
      }
      return check
    },
    // 公司
    checkCompany() {
      let company = document.getElementById('company')
      let check = false
      if (!this.user.company) {
        company.style.display = 'block'
        check = false
      } else {
        company.style.display = 'none'
        check = true
      }
      return check
    },
    // 电话
    checkTel() {
      let tel = document.getElementById('tel')
      let check = false
      if (!this.user.tel) {
        tel.style.display = 'block'
        tel.innerHTML = '手机号码不能为空'
        check = false
      } else if(!(/^1[3456789]\d{9}$/.test(this.user.tel))) {
        tel.style.display = 'block'
        tel.innerHTML = '手机号码有误'
        check = false
      } else {
        tel.style.display = 'none'
        check = true
      }
      return check
    },
    // 邮箱
    checkEmail() {
      let email = document.getElementById('email')
      let check = false
      if ( !this.user.email ) {
        email.style.display = 'block'
        email.innerHTML = '邮箱不能为空'
        check = false
      } else if (!(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(this.user.email))) {
        email.style.display = 'block'
        email.innerHTML = '邮箱格式不正确'
        check = false
      } else {
        email.style.display = 'none'
        check = true
      }
      return check
    },
    // 内容
    checkContent() {
      let content = document.getElementById('content')
      let check = false
      if ( !this.user.content ) {
        content.style.display = 'block'
        check = false
      } else if(!(/^[\u4e00-\u9fa5a-z1-9]+$/gi.test(this.user.content))) {
        content.style.display = 'block'
        content.innerHTML = '只能输入汉字、字母、数字'
        check = false
      } else {
        content.style.display = 'none'
        check = true
      }
      return check
    },
    checkForm: function (e) {
      if (this.checkName() && this.checkCompany() && this.checkTel() && this.checkEmail() && this.checkContent()) {
        return true
        window.location.href = 'http://localhost:8081/'
      }
      e.preventDefault();

    }
  }
}
</script>

<style scoped>

</style>
