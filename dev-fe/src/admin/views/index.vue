<template>
  <div class="layui-layout layui-layout-admin">
   <xy-header></xy-header>
    <xy-navvv></xy-navvv>
    <div class="layui-body">
      <!-- 内容主体区域 -->
      <div style="padding: 15px;">
        <table id="demo" lay-filter="test">
        </table>
      </div>
    </div>

    <div class="layui-footer">
      <!-- 底部固定区域 -->
      © layui.com - 底部固定区域
    </div>
  </div>
</template>

<script>
import XyHeader from '../components/header'
import XyNavvv from '../components/nav'
export default {
  components: {
    XyHeader,
    XyNavvv
  },
  created () {
    layui.use('table', function(){
      var table = layui.table;
      //第一个实例
      table.render({
        elem: '#demo'
        ,height: 312
        ,url: 'http://m.xyucd.com:7000/msg-list' //数据接口
        ,page: true //开启分页
        ,cols: [[ //表头
          {field: '_id', title: 'ID', width:'5%', fixed: 'left'}
          ,{field: 'name', title: '姓名', width:'10%'}
          ,{field: 'company', title: '公司', width:'20%'}
          ,{field: 'tel', title: '电话', width:'10%'}
          ,{field: 'email', title: '邮箱', width: '15%'}
          ,{field: 'content', title: '咨询内容', width: '40%'}
        ]]
      });

    });
  }
}
</script>

<style scoped>

</style>
