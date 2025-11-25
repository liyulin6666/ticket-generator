<template>
  <div style="padding: 40px; text-align: center;">
    <h2>扫码生成你的票根</h2>
    <qrcode-vue :value="url" :size="200" />
  </div>
</template>

<script setup lang="ts">
import QrcodeVue from "qrcode.vue";

// 根据环境判断二维码内容
const url = import.meta.env.PROD
  ? "https://ticket-generator-flame-two.vercel.app/ticket" // Vercel 公网 URL
  : window.location.origin + "/ticket"; // 本地开发使用本地 URL
</script>
