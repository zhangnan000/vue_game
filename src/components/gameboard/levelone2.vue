<template>
    <div class="level_one_box">
      <div class="seconds_box">
          <span class="remind_time">{{time}}</span>
          <span class="seconds">SECONDS</span>
      </div>
      <ul class="cell_box">
          <!-- 第一行    -->
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_input" @click="input_show('one')">{{answer.one}}</li>
          <li class="cell_list_white">U</li>
          <li class="cell_list_white">S</li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <!-- 第二行 -->
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_white">O</li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_input" @click="input_show('two')">{{answer.two}}</li>
          <li class="cell_list_black"></li>
          <!-- 第三行 -->
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_white">A</li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_white">I</li>
          <li class="cell_list_black"></li>
          <!-- 第四行 -->
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_input" @click="input_show('three')">{{answer.three}}</li>
          <li class="cell_list_white">R</li>
          <li class="cell_list_white">U</li>
          <li class="cell_list_white">C</li>
          <li class="cell_list_white">K</li>
          <!-- 第五行    -->
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_input" @click="input_show('four')">{{answer.four}}</li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_white">Y</li>
          <li class="cell_list_black"></li>
          <!-- 第六行 -->
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_input"  @click="input_show('five')">{{answer.five}}</li>
          <li class="cell_list_white">A</li>
          <li class="cell_list_white">R</li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_white">C</li>
          <li class="cell_list_black"></li>
          <!-- 第七行 -->
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_white">X</li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_white">L</li>
          <li class="cell_list_black"></li>
          <!-- 第八行 -->
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_input" @click="input_show('six')">{{answer.six}}</li>
          <li class="cell_list_white">I</li>
          <li class="cell_list_white">R</li>
          <li class="cell_list_white">P</li>
          <li class="cell_list_white">L</li>
          <li class="cell_list_white">A</li>
          <li class="cell_list_white">N</li>
          <li class="cell_list_white">E</li>
          <li class="cell_list_black"></li>
      </ul>
      <button class="submit" @click="send_data()">
          SUBMIT
      </button>
      <div class="exercise_problems">
        <div class="exercise_problems_title">
            DOWN:
        </div>
        <p class="exercise_problems_con">
            1.This mode of transportation moves on top of the water.
        </p>
        <p class="exercise_problems_con">
            2.This mode of transportation has two wheels. You can exercise
your legs by riding it.
        </p>
        <p class="exercise_problems_con">
            4.You have to hold up your hand and shout “_____, _____” to get a
ride in this car.
        </p>
        <div class="exercise_problems_title exercise_problems_title_two">
            ACROSS:
        </div>
        <p class="exercise_problems_con">
            1.This mode of transportation is bigger than a car and a truck,
travels on roads, and can carry 60 people.
        </p>
        <p class="exercise_problems_con">
            3.This mode of transportation is bigger than a car, but not as big as
a bus. You can put things in the back of it.
        </p>
        <p class="exercise_problems_con">
            5.This is the most common mode of transportation. It has four
wheels, travels on roads, and uses gas.
        </p>
         <p class="exercise_problems_con">
            6.This mode of transportation flies in the air. It has wings, and is
flown by a pilot.
        </p>
      </div>
      <div class="level_box"  v-show='isShow'>
          <div class="level_box_float">
              <p>1</p>
              <p>LEVEL</p>
          </div>
      </div>
      <div class="game_over_box" v-show='isshow_over'>
          <div class="game_over">
            <div class="prompt_box">
                <img src="../../assets/images/game_over.gif" alt="">
                <p class="game_over_prompt">GAME OVER</p>
            </div>
            <div class="over_button_box">
                <button @click="showCopyBox" class="invite_friend">
                    <p class="invite_friend_title">INVITE FRIEND</p>
                    <div class="star_box">
                        <img class="star_background" src="../../assets/images/star.png"/>
                        <span>+1</span>
                    </div>
                </button>
            </div>
          </div>
      </div>
      <div class="game_clear_box" v-show='isshow_success'>
           <div class="game_over">
               <div class="prompt_box">
                <img src="../../assets/images/game_success.gif" alt="">
                <p class="game_over_prompt">GAME CLEAR</p>
              </div>
              <button class="bonus_time" @click="handleGoToBonus">BONUS TIME</button>
           </div>
          </div>
      <input autofocus ref='input' v-show="isInputShow" @blur="click_hide" @input="input(inputStatus)" type="text" class="click_enter">
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
           time:120,
           isShow:true,
           isInputShow:false,
           isshow_over:false,
           isShowCopy:false,
           isshow_success:false,
           shareUrl:'',
           answer: {
               one:'1',
               two:'2',
               three:'3',
               four:'4',
               five:'5',
               six:'6',
           },
           inputStatus:'one',
           sort:2,
           life:''
        }
    },
    methods:{
        count_down(){
            if(this.life <= 0) {
                this.isShow = false
                return
            }
            setTimeout(()=>{
                this.isShow = !this.isShow;
                const timer = setInterval(()=>{
                this.time--;
                if(this.time==0){
                    clearInterval(timer)
                    // this.isshow_over=true;
                }
            },1000)
            },2000)
                
        },
        input_show(arg){
            this.isInputShow = true;
            this.inputStatus = arg;
            this.$refs.input.focus
        },
        input(arg){
            if(this.$refs.input.value == ''){
                return
            }
            this.answer[arg] = this.$refs.input.value
        },
        click_hide(){
           this.isInputShow = false;
           this.$refs.input.value='';
        },
        send_data(){
            var that=this;
            var arr='';
            for(var i=0;i<$('.cell_list_input').length;i++){
                arr+=$('.cell_list_input').eq(i).html()+','
                // arr.push($('.cell_list_input').eq(i).html());
            }
            arr=arr.substring(0,arr.length-1);
            arr = arr.toUpperCase();
            const only = localStorage.getItem('only')
            this.$axios.post("/activity/lyrics",{sort:this.sort,lyrics:arr,only:only}).then(function(res){
                if(res.data.status==1){
                    that.isshow_success=true;
                }else{
                    // that.isshow_over=true;
                }
            })
        },
        handleGoToBonus () {
            this.$router.push('/plam')
        },
        showCopyBox() {
            const only = localStorage.getItem('only')
            let url = window.location.href
            let share = url.replace(this.$route.path,'/shared')
            this.shareUrl = `${share}?only=${only}`
            this.isShowCopy = true
            this.isshow_over = false;
        },
         getLife() {
            this.$axios.post('/activity/get_user',{only:localStorage.getItem('only')}).then(
                ({data}) => {
                    if(data.status == 1){
                        this.life = data.data.num
                        this.count_down();
                        if(this.life <= 0){
                            // this.isshow_over=true
                        }
                    }
                }
            )
        }
    },
    created(){
        this.getLife();
    },
    updated(){
        this.$refs.input.focus();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.seconds_box{
    width:100%;
    height:auto;
}
.seconds_box{
    width: 100%;
    height:0.7rem;
    text-align: center;
    margin-top:0.2rem;
}
.remind_time{
    font-size:0.7rem;
    font-weight: bold;
    display: block;
    float:left;
    margin-left:2.16rem;
}
.seconds{
    font-size:0.2rem;
    font-weight:bold;
    display: block;
    float:left;
    margin-top:0.4rem;
    margin-left:0.15rem;
}
.cell_box{
    width:100%;
    padding-top:0.25rem;
    padding-left:0.01rem;
    box-sizing: border-box;
    overflow: hidden;
}
.cell_box li{
    width:0.49rem;
    height: 0.49rem;
    float:left;
    box-sizing: border-box;
    font-size:0.2rem;
    line-height:0.49rem;
    text-align: center;
    font-weight:bold;
}
.cell_box .cell_list_black{
    background: #0e100f;
    border:0.01rem solid #fff;
}
.cell_box .cell_list_white{
    background: #fff;
    border:0.01rem solid #0e100f;
}
.cell_box .cell_list_input{
    background: #fff;
}
/* 游戏成功弹框 */
.game_clear_box{
    width:100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    background:rgba(0,0,0,0.3);
}
.bonus_time{
    display: block;
    width:2.36rem;
    height: 0.56rem;
    background: #0f110f;
    margin:0 auto;
    font-size:0.24rem;
    color:#fff;
    font-weight: bold;
    text-align: center;
    outline: none;
    border:0;
    letter-spacing: 0.01rem;
}
.submit{
    display: block;
    width:2.36rem;
    height: 0.56rem;
    background: #0f110f;
    margin:0 auto;
    font-size:0.24rem;
    color:#fff;
    font-weight: bold;
    text-align: center;
    outline: none;
    border:0;
    letter-spacing: 0.01rem;
    margin-top:0.3rem;
}
.exercise_problems{
    width:5.1rem;
    height: auto;
    margin:0 auto;
    margin-bottom:0.4rem;
    overflow: hidden;
    margin-top:0.3rem;
}
.exercise_problems_title{
    font-size:0.18rem;
    font-weight:bold;
    margin-bottom:0.15rem;
}
.exercise_problems_con{
    font-size:0.14rem;
    line-height:0.28rem;
}
.exercise_problems_title_two{
    margin-top:0.15rem;
}
.level_box{
    width:100%;
    height: 100%;
    background:rgba(0,0,0,0.3);
    position: fixed;
    top:0;
    left: 0;
}
.level_box_float{
    width:3.2rem;
    height: 3.2rem;
    background: #fff;
    margin:0 auto;
    margin-top:2.2rem;
    overflow: hidden;
}
.level_box_float p:first-child{
    height: 1.28rem;
    line-height:1.28rem;
    font-size:1.28rem;
    margin-top:0.6rem;
    text-align: center;
    font-weight:bold;
}
.level_box_float p:last-child{
    height: 0.8rem;
    line-height:0.8rem;
    font-size:0.38rem;
    text-align: center;
    font-weight:bold;
}
/* 游戏成功弹框 */
.game_clear_box{
    width:100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    background:rgba(0,0,0,0.3);
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
    font-size:0.28rem;
    font-weight:bold;
    line-height:2rem;
    height:100%;
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
.star_box{
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
    background-image: url(../../assets/images/text_background.png);
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
