<template>
  <div>
    <p class="title">INVITE YOUR FRIENDS TO <br> GET ONE GAME COIN</p>
    <img src="../assets/images/invite@2x.png" alt="">
    <p class="tips">THANKS FOR YOUR SUPPORT, YOUR<br> FRIENDS INVITE YOU JOIN THE <br> CROSSWORD PUZZLE TO WIN <span class="red">iPHONE X</span>.</p>
    <router-link :to="{path:'/',query:{only:only}}" class="download">I WANNA TRY</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      only:''
    }
  },
  created (){
    this.only = this.$route.query.only
  }
}
</script>


<style scoped>
div {
  text-align: center;
}
.title {
  width: 100%;
  margin-top: 0.74rem;
  font-size: 0.36rem;
}
img {
  margin-top:0.4rem;
  width: 4.2rem;
  height: 4.2rem;
}
.tips {
  margin-top: 0.4rem;
  width: 100%;
  font-size: 0.2rem;
}
.download {
  display: block;
  width: 3.76rem;
  height: 0.82rem;
  line-height: 0.82rem;
  font-size: 0.28rem;
  background-color: #b5163b;
  color: #fff;
  margin-top:0.65rem;
  margin-left: auto;
  margin-right: auto;
}
.red {
  color: #cc0000
}
</style>

