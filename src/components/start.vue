<template>
  <div class="start_box">
    <div class="star_and_rule">
      <div class="star_box">
        <img src="../assets/images/star.png" alt="">
        <p class="life_sum">+{{life}}</p>
      </div>
      <router-link to="/rules" tag="a" class="rules_zn">
        RULES
      </router-link>   
    </div>
    <div class="start_button_box">
      <a href="javascript:;" class="start_button" @click="start()"></a> 
    </div> 

    <div class="game_over_box" v-show='isshow_over'>
          <div class="game_over">
            <div class="prompt_box">
                <img src="../assets/images/game_over.gif" alt="">
                <p class="game_over_prompt">No Game Coin</p>
            </div>
            <div class="over_button_box">
                <!-- <button class="over_restart"></button> -->
                <button @click="showCopyBox" class="invite_friend">
                    <p class="invite_friend_title">INVITE FRIEND</p>
                    <div class="invite_box">
                        <img class="star_background" src="../assets/images/star.png"/>
                        <span>+1</span>
                    </div>
                </button>
            </div>
          </div>
      </div> 

      <div v-show="isShowCopy" class="copy-box">
          <div class="copy-box-small">
              <textarea name="" id="" cols="30" rows="10">{{shareUrl}}</textarea>
              <b class="tips">Copy this link and share to your friends <br>then you can get one more chance.</b>
          </div>
      </div>  
  </div>
</template>
<script>
export default {
  data(){
    return{
      to_only:'',
      life:'1',
      isshow_over:false,
      isShowCopy:false,
      shareUrl:''
    }
  },
  created () {
    this.to_only = this.$route.query.to_only
    this.getLife()
  },
  methods:{
    start(){
      // 获取本地唯一标识 如果没有 则请求
      if(!localStorage.getItem('only')){
        this.$axios.post('/activity/user',{to_only:this.to_only}).then(
          ({data:{data}}) => {
            localStorage.setItem('only',data.only)
            this.jumpToGame()
          }
        )
      } else {
        if(this.life > 0){
          this.jumpToGame()
        } else {
          this.isshow_over = true;
        }
      }
    },
    getLife() {
      if(localStorage.getItem('only')){
        this.$axios.post('/activity/get_user',{only:localStorage.getItem('only')}).then(
          ({data:{data}}) => {
            if(!data){
              return
            }
            this.life = data.num
          }
        )
      }
    },
    jumpToGame(){
       var n1=Math.floor(Math.random()*3+1);
            if(n1==1){
              this.$router.push("/levelone1");
            }else if(n1 == 2){
              this.$router.push("/leveltwo2");
            }else if(n1 == 3){
              this.$router.push("/levelthree2");
            }
    },
    showCopyBox() {
      const only = localStorage.getItem('only')
      let url = window.location.href
      let share = url.replace(this.$route.path,'/shared')
      this.shareUrl = `${share}?only=${only}`
      this.isShowCopy = true
      this.isshow_over = false;
    },

  }
}
</script>
<style scoped>
body{
  background: #fff;
}
.start_box{
  width:100%;
  height:auto;
}
.star_and_rule{
  width:100%;
  height: 0.48rem;
  overflow: hidden;
  margin-top:0.6rem;
}
.star_box{
  float: left;
  margin-left:0.6rem;

}
.star_box img{
  display: block;
  float:left;
  width:0.45rem;
  height:0.46rem;
}
.life_sum{
  float:left;
  font-size:0.22rem;
  height: 0.45rem;
  line-height:0.45rem;
  font-weight:bold;
  margin-left:0.15rem;
}
.rules_zn{
  width:1.4rem;
  height: 0.46rem;
  border:0.01rem solid #333;
  font-size:0.24rem;
  font-weight:bold;
  text-align: center;
  line-height:0.46rem;
  display: block;
  float: right;
  margin-right:0.6rem;
}
.start_button_box{
  width:100%;
  height: 8.52rem;
  width:100%;
  background-image: url('../assets/images/recreational_machines.png');
  background-size: cover;
  overflow: hidden;
  margin-top:0.5rem;
}
.start_button{
  display: block;
  width:3.34rem;
  height: 2.42rem;
  margin:0 auto;
  margin-top:2.68rem;
}

.game_over_box{
    width:100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    background:rgba(0,0,0,0.3);
}
.game_over{
    width:4.6rem;
    height: 2.72rem;
    margin:0 auto;
    margin-top:2.66rem;
    background: #fff;
}
.prompt_box{
    height: 2rem;
    width:4.06rem;
    margin:0 auto;
    overflow: hidden;
}
.prompt_box img{
    display: block;
    float: left;
    width:2rem;
    height: 2rem;
}
.game_over_prompt{
    float: right;
    font-size:0.26rem;
    font-weight:bold;
    line-height:2rem;
    height:2rem;
}
.over_button_box{
    width:4.06rem;
    height: 0.56rem;
    overflow: hidden;
    box-sizing: border-box;
    margin:0 auto;
}
.over_restart{
    display: block;
    float:left;
    width:1.68rem;
    height: 0.56rem;
    line-height: 0.56rem;
    font-size:0.14rem;
    text-align: center;
    outline: none;
    border:0.01rem solid #080808;
    background: #fff;
    color:#222;
}
.invite_friend{
    display: block;
    margin:0 auto;
    width:1.68rem;
    height: 0.56rem;
    outline: none;
    border:0.01rem solid #080808;
    background: #fff;
    color:#222;
    padding:0;
}
.invite_friend_title{
    width:100%;
    height: 0.28rem;
    line-height:0.28rem;
    font-size:0.1rem;
}
.invite_box{
    width:100%;
    height:0.14rem;
}
.star_background{
    display: block;
    float:left;
    width:0.25rem;
    height: 0.25rem;
    margin-left:0.5rem;
}
.star_box span{
    display: block;
    float: left;
    margin-left:0.07rem;
}
.click_enter{
    width:6rem;
    height: 0.68rem;
    position: fixed;
    top:7.6rem;
    left:0.2rem;
    border:0.01rem solid #333;
    outline: none;
    padding-left:0.2rem;
    font-size:0.24rem;
}
.copy-box {
    position: fixed;
    right: 0;
    left: 0;
    top:0;
    bottom: 0;
    background: rgba(0, 0, 0,.3)
}
.copy-box-small {
    width: 4.6rem;
    height: 2.72rem;
    background-image: url(../assets/images/text_background.png);
    background-size: 4.6rem 2.72rem;
    margin: 0 auto;
    margin-top: 2.66rem;
    font-size: 0.24rem;
    line-height: 0.35rem;
    padding:0.5rem 0.3rem;
    word-break: break-all;
}
.copy-box-small textarea{
    display: block;
    width:100%;
    background: #333;
    height: 1.13rem;
    margin:0 auto;
    color:#fff;
    resize: none;
    border:0;
    outline: none;
}
.tips {
    display: block;
    margin-top:0.08rem;
    padding-top: 0.1rem;
    line-height: 0.25rem;
    font-size:0.12rem;
    /* text-transform: uppercase; */
}
</style>

