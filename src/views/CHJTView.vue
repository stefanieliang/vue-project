<!-- 参会交通 -->

<template>
  <div class="chjt">
    <img style="width: 100%" src="@/assets/img/logo-bg.jpg"/>
    <main>
      <div class="title">参会交通</div>
      <img class="title-img" src="@/assets/img/chjt-title.png" alt="logo">
      <div class="chjt-way" style="position: relative; top: -10px;">
        <span>公共交通：</span>地铁2号线营盘街地铁站B出口，步行484米约7分钟
      </div>
      <div class="chjt-way">
        <span>自驾/打车：</span>导航沈阳富力万达文华酒店（浑南区近郊营盘西街17-5号）
      </div> 
      <div class="pic">
        <div class="pic-addr" @click="launchMap()">
          <img src="@/assets/img/chjt-address.jpg" alt="logo">
          <div class="daohang">点击图片直接导航</div>
        </div>
        <div class="pic-photo">
          <img src="@/assets/img/hotel.jpg" alt="logo">
          <div class="memo">沈阳富力万达文华酒店</div>
        </div>
      </div>     
    </main>
    
    <BackComponent />
  </div>
</template>

<script setup lang="ts">
import BackComponent from "@/components/BackComponent.vue";

const launchMap = () => {
  window.location.href = 'https://uri.amap.com/marker?position=123.457447,41.735137&name=沈阳富力万达文华酒店'
}

</script>

<style scoped lang="less">
  .chjt {
    min-height: 100vh;
    background-color: #FFFFFF;
    main{
      position: relative;
      // top: -80px;
      .title{
        width: 60%;
        font-weight: 600;
        font-size: 17px;
        color: #E50011;
        position: relative;
        left: 56px;
        top: 8px;
      }
      .title-img{
        width: 100%;
        padding-left: 16px;
        padding-right: 16px;
      }
      .chjt-way{
        padding-left: 56px;
        padding-right: 20px;
        font-weight: 600;
        font-size: 13px;
        color: #666666;
        span{
          font-weight: 600;
          font-size: 13px;
          color: #E50011;
        }
      }
      .pic{
        padding:20px 60px;
        img{          
          width: 100%;
        }
        .pic-addr{
          margin-bottom: 28px;
          .daohang{            
            margin: 10px auto;
            text-align: center;
            font-weight: 600;
            font-size: 13px;
            color: #666666;
          }
        }
        .pic-photo{
          .memo{
            margin: 10px auto;
            text-align: center;
            font-weight: 600;
            font-size: 13px;
            color: #666666;
          }
        }
      }
    }
  }
</style>

