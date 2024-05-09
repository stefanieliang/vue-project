<!-- 点击报名 -->

<template>
  <div class="djbm">
    <div class="djbm-content">
      <img src="@/assets/img/minipro.png"/>
      <p>微信扫描二维码</p>
      <p>即刻报名参加本次论坛</p>
    </div>
    <BackComponent />
  </div>
</template>

<script setup lang="ts">
import BackComponent from "@/components/BackComponent.vue";
</script>

<style scoped lang="less">
.djbm{
  height: 100vh;;
  background-color: #FFFFFF;
  .djbm-content{
    padding-top: 200px;
    text-align: center;
    img{
      width: 148px;
      height: 148px;
    }
    p{
      font-weight: 600;
      font-size: 14px;
      color: #666666;
      line-height: 20px;
    }
  }
}

</style>
