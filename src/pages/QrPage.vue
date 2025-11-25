<template>
    <div style="padding: 40px; text-align: center;">
      <h2>扫码生成你的票根</h2>
      <qrcode-vue :value="url" :size="200" />
    </div>
  </template>
  
  <script setup lang="ts">
  import QrcodeVue from "qrcode.vue";
  
  const url = window.location.origin + "/ticket"; // H5 页面链接
  </script>
  