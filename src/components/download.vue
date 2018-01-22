<template>
  <div>
    <p class="title">REGISTRATION HAS <br>BEEN SUCCESSFULLY<br> COMPLETED</p>
    <img src="../assets/images/gift@2x.png" alt="">
    <p class="tips">Please download TUBATULU app then contact our customer service team to get your rewards.</p>
    <a :href="downloadLink" class="download">DOWNLOAD APP NOW</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      downloadLink:'javascript:;'
    }
  },
  created () {
    this.checkMobile()
  },
  methods: {
    checkMobile() {
      const mobileInfo = window.navigator.userAgent
      console.log(mobileInfo)
      console.log(mobileInfo.indexOf('Android'))
      if(mobileInfo.indexOf('Android') != -1){
        this.downloadLink = "https://play.google.com/store/apps/details?id=com.slt.itaobao  "
      }
      if(mobileInfo.indexOf('iPhone') != -1) {
        this.downloadLink = "https://itunes.apple.com/cn/app/tubatulu/id1331327255?mt=8"
      }
    }
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
  font-size: 0.38rem;
}
img {
  width: 4.2rem;
  height: 4.2rem;
}
.tips {
  margin-top: 0.4rem;
  line-height: 0.3rem;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  font-size: 0.16rem;
  text-transform: uppercase;
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
</style>

