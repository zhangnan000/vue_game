<template>
    <div>
      <router-link tag="div" :to="{name:'start',query:{to_only:only}}" class="index_img_box">
        <img src="../assets/images/start.png" alt="">
      </router-link>
    </div>
</template>

<script>
export default {
  data(){
    return{
      only:''
    }
  },
  created(){
    this.only = this.$route.query.only
  },
  method(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index_img_box{
  width:100%;
  height:auto;
}
.index_img_box img{
  width:100%;
  height: auto;
  overflow: hidden;
}
</style>
