<!-- 视频集锦 -->

<template>
  <div class="spjj">    
    <div class="spjj-top">视频号</div>
    <div class="spjj-dhr">
      <img src="@/assets/img/spjj-dhr.png" alt="dhr">
    </div>
    <div class="spjj-container">
      <div class="spjj-container-item" v-for="(item, index) in list" :key="'i'+index">
        <div class="spjj-container-item-title" :class="item.titleStyle">
          <span class="addr">{{item.addr}} </span>
          <span class="title">{{item.title}} </span>
        </div>
        <div class="spjj-container-item-main">          
          <div v-for="(itemj, index) in item.detail" :key="'j'+index">
            <!-- <a :href="itemj.path"> -->
              <img :src="itemj.img" alt="logo" @click="showPopup(itemj.img)">
            <!-- </a> -->
          </div>
        </div>
      </div>
    </div>

    <BackComponent/>

    <van-popup v-model:show="show" round >  
      <!-- <div style="width:80vw"> -->
        <img style="width: 100%;height: 100%" :src="showImg"/>
      <!-- </div> -->
    </van-popup>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BackComponent from "@/components/BackComponent.vue";
import imgNanjing1 from '@/assets/img/spjj-nanjing-11.jpg';
import imgGuangzhou1 from '@/assets/img/spjj-guangzhou-11.jpg';
import imgChangsha1 from '@/assets/img/spjj-changsha-11.png';
import imgChangsha2 from '@/assets/img/spjj-changsha-22.png';
import imgChengdu1 from '@/assets/img/spjj-chengdu-11.png';
import imgChengdu2 from '@/assets/img/spjj-chengdu-22.png';
import imgZhengzhou1 from '@/assets/img/spjj-zhengzhou-11.png';
import imgZhengzhou2 from '@/assets/img/spjj-zhengzhou-22.png';
const list = ref([
  { 
    titleStyle:'chengdu',
    addr:'江苏南京',
    title:'华东峰会数智人力专题论坛',
    detail:[
      {
        img: imgNanjing1,
        // path:''
      },
    ]
  },
  { 
    titleStyle:'zhengzhou',
    addr:'广东广州',
    title:'大湾区峰会数智人力专题论坛',
    detail:[
      {
        img: imgGuangzhou1,
        // path:''
      },
    ]
  },
  { 
    titleStyle:'changsha',
    addr:'湖南长沙',
    title:'华中峰会数智人力专题论坛',
    detail:[
      {
        img: imgChangsha1,
        path:'https://weixin.qq.com/sph/A4YISJFn6'
      },
      {
        img: imgChangsha2,
        path:'https://weixin.qq.com/sph/Awq41Q2Wz'
      },

    ]
  },
  { 
    titleStyle:'chengdu',
    addr:'四川成都',
    title:'西南峰会数智人力专题论坛',
    detail:[
      {
        img: imgChengdu1,
        path:'https://weixin.qq.com/sph/A9A6zEnvy'
      },
      {
        img: imgChengdu2,
        path:'https://weixin.qq.com/sph/AVqVJvFIQ'
      },

    ]
  },
  { 
    titleStyle:'zhengzhou',
    addr:'河南郑州',
    title:'中部峰会数智人力专题论坛',
    detail:[
      {
        img: imgZhengzhou1,
        path:'https://weixin.qq.com/sph/AnM9QnHQI'
      },
      {
        img: imgZhengzhou2,
        path:'https://weixin.qq.com/sph/A0giSED9N'
      },

    ]
  },
]);
const show = ref(false);
const showImg = ref('');
const showPopup = (path:string) => {
  show.value = true;
  showImg.value = path;
};
</script>

<style scoped lang="less">
  .spjj {    
    min-height: 100vh;
    background-color: #F3F2F4;

    &-top {
      width:100%;
      height: 38px;
      line-height: 38px;
      font-size: 16px;
      font-weight: bold;
      color: #333333;
      text-align: center;
      background-color: #fff;
    }

    &-dhr {
      width: 100%;
      height: 200px;
      margin-top: 2px;
      border:1px dashed #E6E6E6;
      box-sizing: border-box;
      img{
        width: 100%;
        height: 100%;
      }
    }

    &-container {
      padding: 12px;
      &-item {
        width: 100%;
        background-color: #fff;
        border-radius: 9px;
        margin-bottom: 12px;
        .spjj-container-item-title{
          line-height: 50px;
          border-bottom: 1px solid #E6E6E6;
          .addr{
            font-size: 16px;
            font-weight: bold;
            color: #E50011;
            margin-left: 16px;
            margin-right: 12px;
          }
          .title{            
            font-size: 14px;
            font-weight: bold;
            color: #5E5E5F;
          }
        }
        .spjj-container-item-main{
          padding:20px;    
          display: flex;
          justify-content: space-around;
          div{
            width:150px;
            height: 200px;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
        .changsha{
          width: 100%;
          height: 50px;
          background: linear-gradient( 149deg, #FFF4E9 0%, #FFE8D7 100%);
          box-shadow: 0px 1 5px 0px rgba(205,205,205,0.5);
          border-radius: 9px 9px 0px 0px;
        }
        .chengdu{
          width: 100%;
          height: 50px;
          background: linear-gradient( 149deg, #F2F2FE 0%, #E3E1FA 100%);
          box-shadow: 0px 1 5px 0px rgba(205,205,205,0.5);
          border-radius: 9px 9px 0px 0px;
        }
        .zhengzhou{
          width: 100%;
          height: 50px;
          background: linear-gradient( 149deg, #E7FBFC 0%, #B8E2EC 100%);
          box-shadow: 0px 1 5px 0px rgba(205,205,205,0.5);
          border-radius: 9px 9px 0px 0px;
        }
      }
    }
  }
</style>
