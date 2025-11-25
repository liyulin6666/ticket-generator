<template>
    <div style="padding: 20px; text-align: center;">
      <img ref="templateRef" src="/template.png" style="width: 300px;" />
  
      <div style="margin: 20px 0;">
        <input
          v-model="name"
          placeholder="请输入名字"
          style="padding: 10px; width: 200px;"
        />
      </div>
  
      <button @click="generate" style="padding: 10px 20px;">生成票根</button>
  
      <div v-if="resultImg">
        <h3>生成结果</h3>
        <img :src="resultImg" style="width: 300px;" />
        <div>
          <a :href="resultImg" download="ticket.png">下载图片</a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  const name = ref("");
  const templateRef = ref<HTMLImageElement | null>(null);
  const resultImg = ref("");
  
  const generate = () => {
    const img = templateRef.value;
    if (!img) return;
  
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
  
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(img, 0, 0);
  
    // 绘制名字到票根
    ctx.font = "bold 28px Arial";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText(name.value, canvas.width / 2, canvas.height - 50);
  
    resultImg.value = canvas.toDataURL("image/png");
  };
  </script>
  