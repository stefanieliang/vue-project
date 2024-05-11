<template>
  <main>
    
    <img style="width: 100%" src="@/assets/img/logo-bg.jpg"/>
    <!-- <section class="title">
      大湾区峰会  <span class="dot"></span>  广东广州
    </section> -->

    <div class="nav">
      <van-row :gutter="20">
        <!-- <van-col span="8" class="nav-item" @click="goTo('/jpkc')"><div class='nav-item-container jpkc'><div><img src="@/assets/img/yicheng.png"/></div><span>精品课程</span></div></van-col> -->
        <van-col span="8" class="nav-item" @click="goTo('/kcdg')"><div class='nav-item-container jpkc'><div><img src="@/assets/img/yicheng.png"/></div><span>课程大纲</span></div></van-col>
        <van-col span="8" class="nav-item" @click="goTo('/kcjj')"><div class='nav-item-container kcdg'><div><img src="@/assets/img/kechengdagang.png"/></div><span>课程简介</span></div></van-col>
        <van-col span="8" class="nav-item" @click="go('zzjj')"><div class='nav-item-container skjb'><div><img src="@/assets/img/jiaoyiyuan.png"/></div><span>作者简介</span></div></van-col>
      <!-- </van-row>
      <van-row :gutter="20"> -->
        <van-col span="8" class="nav-item" @click="goTo('/djbm')"><div class='nav-item-container djbm'><div><img src="@/assets/img/baoming.png"/></div><span>点击报名</span></div></van-col>
        <van-col span="8" class="nav-item" @click="goTo('/chjt')"><div class='nav-item-container chjt'><div><img src="@/assets/img/jiaotongchuhang.png"/></div><span>参会交通</span></div></van-col>
        <van-col span="8" class="nav-item" @click="go('kcdy')"><div class='nav-item-container kcdy'><div><img src="@/assets/img/xiaoyuantiaoyan.png"/></div><span>课程调研</span></div></van-col>
      <!-- </van-row>
      <van-row :gutter="20"> -->
        <!-- <van-col span="8" class="nav-item" @click="go('zpzb')"><div class='nav-item-container zpzb'><div><img src="@/assets/img/duosucai.png"/></div><span>照片直播</span></div></van-col> -->
        <van-col span="8" class="nav-item" @click="goTo('/wqhg')"><div class='nav-item-container wqhg'><div><img src="@/assets/img/wangqihuigu.png"/></div><span>往期回顾</span></div></van-col>
        <van-col span="8" class="nav-item" @click="goTo('/spjj')"><div class='nav-item-container spjj'><div><img src="@/assets/img/shipin.png"/></div><span>视频集锦</span></div></van-col>
      <!-- </van-row>
      <van-row :gutter="20"> -->
        <van-col span="8" class="nav-item" @click="goTo('/more')"><div class='nav-item-container more'><div style='min-height: 20px'><img src="@/assets/img/jingqingqidai-kuaishou.png"/></div><span>更多论坛抢先看</span></div></van-col>
        <van-col style="display: none;" span="8" class="nav-item" @click="goTo('/more')"><div class='nav-item-container more'><div><img src="@/assets/img/jingqingqidai-kuaishou.png"/></div><span>更多论坛抢先看</span></div></van-col>
        <van-col style="display: none;" span="8" class="nav-item" @click="goTo('/more')"><div class='nav-item-container more'><div><img src="@/assets/img/jingqingqidai-kuaishou.png"/></div><span>更多论坛抢先看</span></div></van-col>
      </van-row>
    </div>

    
    <!-- <van-grid :border="false" :gutter="10" :column-num="3" square>
      <van-grid-item v-for="item in navs" :key="item" :icon="item.imgSrc" :to="item.path" :style="{'background-color': item.bgColor}">
      </van-grid-item>
    </van-grid> -->

    <div style="text-align: center; font-size: 12px; color: #999999;">ICP备案/许可证号：<a href="https://beian.miit.gov.cn/" target="_blank">	京ICP备2024065114号-1</a></div>
  </main>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter();

const goTo = (param) => {
  router.push(param);
};
const go = (param) => {
  if(param == 'zzjj'){    
    // 作者简介
    window.location.href='https://mp.weixin.qq.com/s/vSfPTuuv_Byd1Fa94EdImA'
  }
  if(param == 'kcdy'){    
    // 课程调研
    window.location.href='https://www.wjx.cn/vm/QTxod47.aspx'
  }
  if(param == 'zpzb'){    
    // 照片直播
    window.location.href='https://as.alltuu.com/album/2147737679/?from=link&menu=live'
  }
};

</script>

<style scoped lang="less">
  main {
    min-height: 100vh;
    background-color: #FFFFFF;
    .title{
      padding-top: 262px;
      padding-bottom: 30px;
      font-weight: 600;
      font-size: 22px;
      color: #E50011;
      text-align: center;
      font-style: normal;
      .dot{
        width: 6px;
        height: 6px;
        background: #E50011;
        display: inline-block;
        border-radius: 100%;
        vertical-align: middle;
      }
    }
    .nav{
      padding: 0px 15px 30px 15px;
      .nav-item{
        margin-bottom: 15px;        
        .nav-item-container {
          border-radius: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 20px;
          div{
            min-height: 34px;
            // margin-bottom: 10px;
          }
          span{
            width: 64px;
            height: 24px;
            font-weight: 400;
            font-size: 14px;
            color: #000000;
            line-height: 24px;
            text-align: center;
            font-style: normal;
          }
        }
        .jpkc{
          background-color: #FEF9ED;
          img{
            width: 26px;
            height: 28px;
          }
        }
        .kcdg{
          background-color: #EEF7F6;
          img{
            width: 26px;
            height: 28px;
          }
        }
        .skjb{
          background-color: #F1F3FF;
          img{
            width: 26px;
            height: 28px;
          }
        }
        .djbm{
          background-color: #FBF2F3;
          img{
            width: 36px;
            height: 28px;
          }
        }
        .chjt{
          background-color: #FEF9ED;
          img{
            width: 26px;
            height: 28px;
          }
        }
        .kcdy{
          background-color: #F4F2FF;
          img{
            width: 26px;
            height: 28px;
          }
        }
        .zpzb{
          background-color: #F2F9FF;
          img{
            width: 26px;
            height: 28px;
          }
        }
        .wqhg{
          background-color: #EEF7F6;
          img{
            width: 26px;
            height: 28px;
          }
        }
        .spjj{
          background-color: #FBF2F3;
          img{
            margin-top: 8px;
            width: 30px;
            height: 20px;
          }
        }
        .more{
          background-color: #FBF2F3;
          img{
            width: 50px;
            height: 18px;
          }
          span{
            margin-bottom: 10px;
          }
        }
      }
    }
  }

  .van-grid-item__content{
    border-radius: 16px;
  }
</style>
