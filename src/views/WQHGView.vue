<!-- 往期回顾 -->

<template>
  <div class="wqhg">    
    <img src="@/assets/img/wqhgBg.png" style="width: 100%; position: absolute; top: 0; left: 0; z-index: -1; "alt="logo">
    <div class="wqhg-container">
      <div class="wqhg-container-item" v-for="(item, index) in reviewlist" :key="index">
        <div class="wqhg-container-item-title">
          <div class="wqhg-container-item-title-left">
            <img :src="item.img"/>
          </div>
          <div class="wqhg-container-item-title-right">
            <div class="line1">{{ item.t1 }}</div>
            <div class="line2">{{ item.t2 }}</div>
            <div class="line3">{{ item.t3 }}</div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="wqhg-container-item-detail">
          {{ item.detail }}
        </div>
        <div class="wqhg-container-item-more" @click="go(item.path)">
          <!-- <a :href="item.path"> -->
            <img src="@/assets/img/wqhg-more9.png" alt="more">
          <!-- </a> -->
        </div>
      </div>
    </div>
    <BackComponent/>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import BackComponent from "@/components/BackComponent.vue";
  import imgGuangzhou from '@/assets/img/wqhg-guangzhou.jpg';
  import imgChangsha from '@/assets/img/wqhg-changsha.png';
  import imgChengdu from '@/assets/img/wqhg-chengdu.png';
  import imgZhengzhou from '@/assets/img/wqhg-zhengzhou.png';
  const reviewlist = ref([
    {
      img: imgGuangzhou,
      t1:'5月10日 广东广州',
      t2:'大湾区峰会数智人力专题论坛',
      t3:'AI与人力资源的革命性融合，智能科技重塑人才管理未来！',
      detail:'本次会议聚焦AI在组织效能提升、全面薪酬管理、人力共享服务及人才发展等方面的应用，吸引了众多行业专家和企业高管。通过深入探讨和案例分享，会议成功展示了人工智能如何助力人力资源管理实现创新与优化，为行业发展提供了新思路。',
      path: 'https://mp.weixin.qq.com/s/e0YsArHgdjU0p0fstPvItw'
    },
    {
      img: imgChangsha,
      t1:'4月25日 湖南长沙',
      t2:'华中峰会数智人力专题论坛',
      t3:'人力资源数智化激活组织效能 赋能新质生产',
      detail:'此次峰会特别邀请了云南白药集团人力资源中心总经理张娜现场分享《基于战略牵引下数智时代持续激活组织效能的实践与探索》；下午的数智人力专题论坛特设两大热门主题公开课——《绩效认知升级：从绩效管理到绩效发生》公开课、《人力共享：智能服务 卓越运营 提质增效》 公开课。授课嘉宾与参会来宾一起探讨人工智能+、数据要素x、绩效升级与人力共享转型等热点话题，帮助企业提质增效，在数字经济时代占据先机。',
      path: 'https://mp.weixin.qq.com/s/8flSlwRhR31bO3eIpKrA3g'
    },
    {
      img: imgChengdu,
      t1:'4月17日 四川成都',
      t2:'西南峰会数智人力专题论坛',
      t3:'群英荟萃蓉城，共享智慧新体验',
      detail:'此次活动以“数据驱动 智能运营”为主题，聚合上千位商业领袖、技术大咖、业界知名学者、专业媒体，共议数智进阶之路，加速企业数智融合，推动西南地区数智化及产业高质量发展。同期，以“智效合一:数据识人 智能育人 智慧用人”为主题的数智人力专题论坛成功举办，共同探讨人力资源数智化转型新路径。',
      path: 'https://mp.weixin.qq.com/s/aIrCmgcfBg9zWSNejIfg3Q'
    },
    {
      img: imgZhengzhou,
      t1:'4月11日 河南郑州',
      t2:'中部峰会数智人力专题论坛',
      t3:'《人力资源数智化升级》公开课，再掀数智化热潮！',
      detail:'此次论坛吸引了企业负责人、人力资源负责人、数字化转型咨询顾问、数字化转型研究者、人力资源管理研究者等行业精英汇聚一堂，共同深度探讨《人力资源数字化升级》公开课的精彩知识与领先实践，反响热烈。',
      path: 'https://mp.weixin.qq.com/s/TjEj-ooFYiCM2BMLln73Vw'
    },
  ]);

  const go = (param) => {
    window.location.href= param
  };
</script>

<style scoped lang="less">
  .wqhg {    
    min-height: 100vh;
    background-color: #F3F2F4;

    .wqhg-container{
      margin-top:200px;
      padding: 12px;
      .wqhg-container-item{
        width: 100%;
        background: #FFFFFF;
        border-radius: 9px;
        margin-bottom: 12px;
        .wqhg-container-item-title{         
          padding:12px;
          display: flex;
          justify-content: space-between;
          .wqhg-container-item-title-left{
            width: 132px;
            height: 80px;
            margin-right: 18px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .wqhg-container-item-title-right{
            width: 200px;
            .line1{
              font-weight: 600;
              font-size: 16px;
              color: #E50011;
            }
            .line2{
              font-weight: 600;
              font-size: 14px;
              color: #5E5E5F;
            }
            .line3{             
              font-weight: 400;
              font-size: 12px;
              color: #666666;
            } 
          }
        }
        .divider{
          border-bottom: 1px dashed #979797;
        }
        .wqhg-container-item-detail{         
          padding:12px;
          font-weight: 400;
          font-size: 12px;
          color: #666666;
        }
        .wqhg-container-item-more{          
          display: flex;
          justify-content: flex-end;
          padding-right: 12px;
          padding-bottom: 12px;
          img{
            width: 104px;
            height: 27px;
          }
        }
      }
    }
  }
</style>
