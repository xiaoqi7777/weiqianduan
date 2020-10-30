<template>
  <div >
    <el-menu :router='true' mode="horizontal">
      <!-- 基座中阔以放自己的路由 -->
      <el-menu-item index='/'>Home</el-menu-item>
      <el-menu-item index='/vue'>Vue应用</el-menu-item>
      <el-menu-item index='/react'>react应用</el-menu-item>
    </el-menu>
  <router-view></router-view>
    <!-- 引用其他子应用 -->
    <div id="vue"></div>
    <div id="react"></div>
    123
  </div>
</template>
