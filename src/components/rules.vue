<template>
  <div class="rule_box">
    <button class="click_close" @click="click_close()">X</button>
    <p class="rules_of_play">
      RULES OF PLAY
    </p>
    <div class="rules_frist">
        <p class="rules_detail">
      ***Before You Play! 
      </p>
      <p class="rules_detail">
      Please take time to read the rules carefully. 
      </p>
      <p class="rules_detail">
      TUBATULU.com reserve all the right 
      </p>
      <p class="rules_detail">
      for the final explanation.***
      </p>
    </div>
    <div class="rules_second">
      <p class="rules_title">
        CONTENTS
      </p>
      <p class="rules_detail">
      3 Levels
      </p>
    </div>
    <div class="rules_second">
      <p class="rules_title">
        OBJECT
      </p>
      <p class="rules_detail">
      Fill three Crossword Puzzle games within limited time by person with one time.
      </p>
    </div>
    <div class="rules_second">
      <p class="rules_title">
        HOW TO PLAY
      </p>
      <p class="rules_detail">
      1. You have 60 seconds to play level 1, In level 2, you will have 30 seconds. In level 3, you will have 15 seconds. However,  you only have one time to pass all three levels. 
      </p>
      <p class="rules_detail">
      2. If you are failed at Level 1, you can share this link to your friends by WeChat or Facebook, then you will receive one more time to continue the game. The crossword puzzle may differ at every time you challenged.
      </p>
      <p class="rules_detail">
      3. If you are failed at Level 2, you will have choice to get a small bonus and share this link to your friends by WeChat or Facebook, then you will have a chance to continue the Final level to win the highest prize. The crossword puzzle may differ at every time your challenged.
      </p>
      <p class="rules_detail">
      4. When you finish all three levels within limited time, then you will receive a reward. Each of you will receive a reward at least as long as you join us!
      </p>
    </div>
    <div class="rules_second">
      <p class="rules_title">
        HOW TO RECEIVE THE REWARD
      </p>
      <p class="rules_detail">
      As long as you finish all three levels, you will find the reward you win. Then you have to click the “SIGN UP” button and download TUBATULU APP to fill out your personal information and home address, so that we can ship the gift to you for free.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    click_close(){
      this.$router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rule_box{
  width:100%;
  height:auto;
  position: relative;
  overflow: hidden;
  margin-bottom:0.8rem;
}
.click_close{
  width:0.5rem;
  height: 0.5rem;
  line-height:0.5rem;
  font-weight:bold;
  text-align: center;
  position: absolute;
  right: 0.3rem;
  top:0.3rem;
  border:0;
  background: #fff;
  outline: none;
  font-size:0.3rem;
}
.rules_of_play{
  width:3.6rem;
  height: 0.7rem;
  line-height:0.7rem;
  text-align: center;
  color:#fff;
  font-weight:bold;
  font-size:0.3rem;
  background: #000;
  margin:0 auto;
  margin-top:0.75rem;
  letter-spacing: 0.01rem;
}
.rules_frist{
  margin-top:0.5rem;
}
.rules_detail{
  width:5.2rem;
  line-height:0.28rem;
  margin:0 auto;
  font-size:0.2rem;
  font-weight:bold;
  letter-spacing: 0.01rem;
}
.rules_second{
  margin-top:0.35rem;
}
.rules_title{
  width:5.2rem;
  height: 0.3rem;
  line-height:0.3rem;
  margin:0 auto;
  font-size:0.24rem;
  font-weight:bold;
  letter-spacing: 0.01rem;
}
</style>
