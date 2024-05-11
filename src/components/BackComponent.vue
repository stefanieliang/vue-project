<template>
  <div class="back"> 
    <img style="float: right; width:48px; height:48px" src="@/assets/img/icon-back.png" @click="this.$router.push('/')"/>
  </div>
</template>

<style scoped lang="less">
.back{
  position: fixed;
  right:10px;
  bottom: 20px;
  z-index: 100;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
