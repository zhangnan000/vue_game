<template>
  <div>
    <h1 class="congratulation">CONGRATULATIONS!</h1>
    <img class="gift" :src="gift.prize_img" alt="">
    <p class="tips">*Click the "SIGN UP" button,<br>then download TUBATULU APP to get your prize."</p>
    <router-link class="sign-btn" to="/register">SIGN UP</router-link>
    <div class="message">
      <i class="mes-ico"></i>
      <span>Congratulations</span>
      <span>Draw a prize</span>
      <span class="red">iPhoneX</span>
    </div>
    <div class="scroll">
      <div class="record">WINNING RECORD</div>
      <div class="winner-view">
        <div ref="scrollView" :class="{anim:animate == true}">
          <div v-for="(item,index) in winnerList" :key="index" class="info">
            <span>{{item.mobile}}</span>
            <span>{{item.prize_name}}</span>
            <span>{{item.create_date}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '../bus'
export default {
  data () {
    return{
      gift:{},
      animate:false,
      timer:null,
      winnerList:[]
    }
  },
  created () {
    this.getWinnerList();
    this.bonus();
  },
  destroyed(){
    clearInterval(this.timer)
  },
  methods:{
    getWinnerList () {
      this.$axios.get('/activity/winning_list').then(
        ({data})=>{
          if(data.status == 1) {
            this.winnerList = data.data
            this.scroll()
          }
        }
      )
    },
    scroll(){
      this.timer = setInterval(()=>{
      let scrollView = this.$refs.scrollView; 
      scrollView.style.marginTop='-30px';
      this.animate=!this.animate;
      setTimeout(()=>{
          this.winnerList.push(this.winnerList[0]);
          this.winnerList.shift();
          scrollView.style.marginTop='0px';
          this.animate=!this.animate;
      },500)},800)
    },
    bonus () {
      const only = localStorage.getItem('only')
        this.$axios.post('/activity/luck_draw',{only:only}).then(
          ({data}) => {
            if(data.status == 1){
              console.log(data.data)
              this.gift = data.data
            }           
        }
      )
    }
  } 
}
</script>

<style>
.congratulation {
  margin-top:1rem;
  width: 100%;
	font-size: 0.48rem;
  line-height: 0.36rem;
  letter-spacing: .04rem;
  text-align: center;
}
.gift {
  margin-top: 0.6rem;
  margin-left: auto; 
  margin-right: auto; 
  width: 4.26rem;
  display: block;
}
.tips {
  margin-top: 0.36rem;
  text-align: center;
  width: 100%;
	font-size: 0.2rem;
}

.sign-btn {
  text-align: center;
  display: block;
  font-size: 0.6rem;
  color: #fff;
  background-color: #b5163b;
  margin-top:0.55rem;
  margin-left: auto; 
  margin-right: auto; 
  width: 3.76rem;
  height: 0.82rem; 
  line-height: 0.82rem;
}
.message {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-right: 0.32rem;
  width: 5.78rem;
	height: 0.72rem;
	background-color: #f7f7f7;
	border-radius: 12px;
  border: solid 0.01rem #000000;
  margin-top: 0.92rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.2rem;
  line-height: 0.72rem;
}
.red {
  color: #cc0000;
  font-size: 0.24rem;
}

.scroll {
  box-sizing: border-box;
  position: relative;
  padding: 0.6rem;
  width: 5.78rem;
  height: 4.78rem;
  border: 0.01rem solid #000000;
  border-radius: 0.12rem;
  margin-top: 0.38rem;
  margin-bottom: 0.6rem;
  margin-left: auto;
  margin-right: auto;
}
.record {
  position: absolute;
  left: 50%;
  top:-0.2rem;
  transform: translateX(-50%);
  width: 3.3rem;
  height: 0.72rem;
  background-image: url("../assets/images/record@2x.png");
  background-repeat: no-repeat;
  background-size: 3.3rem 0.72rem;
  font-size: 0.2rem;text-align: center;
  line-height: 0.72rem;
  color:#fff;
}
.info {
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  font-size: 0.2rem;
  line-height: 0.52rem;
}
.winner-view {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.anim{
  transition: all 0.5s;
}
</style>

