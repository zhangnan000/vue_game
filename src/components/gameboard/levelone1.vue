<template>
    <div class="level_one_box">
      <div class="seconds_box">
          <span class="remind_time">{{time}}</span>
          <span class="seconds">SECONDS</span>
      </div>
      <div class="input_import_box" v-show="show_prompt">
          <p class="prompt_title">
             
          </p>
          <div class="submit_enter_answer">
            <input type="text" class="input_import_zn">
            <button class="enter_answer" @click="enter_show()">
              ENTER
            </button>
          </div>
      </div>
      <ul class="cell_box">
          <!-- 第一行    -->
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_input cell_list_white_one cell_list_test cell_list_input_one" @click="input_show('one')">{{answer.one}}</li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <!-- 第二行 -->
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_white cell_list_white_one"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_input cell_list_white_two cell_list_input_two" @click="input_show('two')" >{{answer.two}}</li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <!-- 第三行 -->
          <li class="cell_list_input cell_list_white_three cell_list_input_three" @click="input_show('three')">{{answer.three}}</li>
          <li class="cell_list_white cell_list_white_three"></li>
          <li class="cell_list_white cell_list_white_three"></li>
          <li class="cell_list_white cell_list_white_one cell_list_white_three"></li>
          <li class="cell_list_white cell_list_white_three"></li>
          <li class="cell_list_input cell_list_white_three cell_list_white_four cell_list_input_four" @click="input_show('four')">{{answer.four}}</li>
          <li class="cell_list_white cell_list_white_three"></li>
          <li class="cell_list_white cell_list_white_three"></li>
          <li class="cell_list_white cell_list_white_three"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_white cell_list_white_two"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <!-- 第四行 -->
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_white cell_list_white_one"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_white cell_list_white_four"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_white cell_list_white_two"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <!-- 第五行    -->
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_white cell_list_white_one"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_input cell_list_white_four cell_list_white_five cell_list_input_five" @click="input_show('five')">{{answer.five}}</li>
          <li class="cell_list_white cell_list_white_five"></li>
          <li class="cell_list_white cell_list_white_five"></li>
          <li class="cell_list_white cell_list_white_five"></li>
          <li class="cell_list_white cell_list_white_five"></li>
          <li class="cell_list_white cell_list_white_two cell_list_white_five"></li>
          <li class="cell_list_white cell_list_white_five"></li>
          <li class="cell_list_white cell_list_white_five"></li>
          <!-- 第六行 -->
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_white cell_list_white_one"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_white cell_list_white_four"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_white cell_list_white_two"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <!-- 第七行 -->
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_white cell_list_white_four"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_white cell_list_white_two"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <!-- 第八行 -->
          <li class="cell_list_black"></li>
          <li class="cell_list_input cell_list_white_six cell_list_input_six" @click="input_show('six')">{{answer.six}}</li>
          <li class="cell_list_white cell_list_white_six"></li>
          <li class="cell_list_white cell_list_white_six"></li>
          <li class="cell_list_white cell_list_white_six"></li>
          <li class="cell_list_white cell_list_white_four cell_list_white_six"></li>
          <li class="cell_list_white cell_list_white_six"></li>
          <li class="cell_list_white cell_list_white_six"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <!-- 第九行 -->
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_white cell_list_white_four"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <!-- 第十行 -->
          <li class="cell_list_input cell_list_white_seven cell_list_input_seven" @click="input_show('seven')">{{answer.seven}}</li>
          <li class="cell_list_white cell_list_white_seven"></li>
          <li class="cell_list_white cell_list_white_seven"></li>
          <li class="cell_list_white cell_list_white_seven"></li>
          <li class="cell_list_white cell_list_white_seven"></li>
          <li class="cell_list_white cell_list_white_four cell_list_white_seven"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
          <li class="cell_list_black"></li>
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
            1.This is the first day of the week
        </p>
        <p class="exercise_problems_con">
            2.This days starts the weekend! Thank gosh, it’s ____!
        </p>
        <p class="exercise_problems_con">
            4.Starts with the letter “S”. It’s not Sunday!
        </p>
        <div class="exercise_problems_title exercise_problems_title_two">
            ACROSS:
        </div>
        <p class="exercise_problems_con">
            3.“Hump” day. This day is in the middle of the week.
        </p>
        <p class="exercise_problems_con">
            5. Abbreviated as “Thurs”
        </p>
        <p class="exercise_problems_con">
            6. People say this is the most productive day of the week. 
Hint: it isn’t Monday!
        </p>
         <p class="exercise_problems_con">
            7. The last day of the week. A day to rest.
        </p>
      </div>
      <div class="level_box" v-show='isShow'>
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
                <!-- <button class="over_restart"></button> -->
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
      <!-- <input autofocus ref='input' v-show="isInputShow" @blur="click_hide" @input="input(inputStatus)" type="text" class="click_enter"> -->
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
           show_prompt:false,
           shareUrl:'',
           num:0,
           answer: {
               one:'1',
               two:'2',
               three:'3',
               four:'4',
               five:'5',
               six:'6',
               seven:'7'
           },
           sort:1,
           life:'',
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
                    this.isshow_over=true;
                }
            },1000)
            },2000)
                
        },
        input_show(arg){
            this.show_prompt=true;
            var num_zn=this.answer[arg];
            var arr=[];
            $('.exercise_problems_con').each(function(){
                var html=String($(this).html());
                arr.push(html);
            })
            for(var i=0;i<arr.length;i++){
                var html_con=String(arr[i]).trim();
                if(html_con.substring(0,1)==num_zn){
                    $('.prompt_title').html(arr[i]);
                }
            }
            this.isInputShow = true;
            this.inputStatus = arg;
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
            var arr='';
            for(var i=0;i<$('.cell_list_white_one').length;i++){
                arr+=$('.cell_list_white_one').eq(i).html()+','
            }
            for(var i=0;i<$('.cell_list_white_two').length;i++){
                arr+=$('.cell_list_white_two').eq(i).html()+','
            }
            for(var i=0;i<$('.cell_list_white_three').length;i++){
                arr+=$('.cell_list_white_three').eq(i).html()+','
            }
            for(var i=0;i<$('.cell_list_white_four').length;i++){
                arr+=$('.cell_list_white_four').eq(i).html()+','
            }
            for(var i=0;i<$('.cell_list_white_five').length;i++){
                arr+=$('.cell_list_white_five').eq(i).html()+','
            }
            for(var i=0;i<$('.cell_list_white_six').length;i++){
                arr+=$('.cell_list_white_six').eq(i).html()+','
            }
            for(var i=0;i<$('.cell_list_white_seven').length;i++){
                arr+=$('.cell_list_white_seven').eq(i).html()+','
            }
            arr=arr.substring(0,arr.length-1);
            arr = arr.toUpperCase();
            console.log(arr);
            const only = localStorage.getItem('only')
            this.$axios.post("/activity/lyrics",{sort:this.sort,lyrics:arr,only:only}).then(
                (res) => {
                if(res.data.status==1){
                    this.isshow_success=true;
                }else{
                    this.isshow_over=true;
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
                        this.count_down()
                        if(this.life <= 0){
                            this.isshow_over=true
                        }
                    }
                }
            )
        },
        enter_show(){
            this.num=String($('.prompt_title').html()).trim().substring(0,1);
            var input_html=String($('.input_import_zn').val());
            var  str=[];
            str=input_html.split("");
            if(this.num==1){
              for(var i=0;i<$('.cell_list_white_one').length;i++){
                $('.cell_list_white_one').eq(i).html(str[i]);
                }  
            }else  if(this.num==2){
                for(var i=0;i<$('.cell_list_white_two').length;i++){
                $('.cell_list_white_two').eq(i).html(str[i]);
                }  
            }else if(this.num==3){
               for(var i=0;i<$('.cell_list_white_three').length;i++){
                $('.cell_list_white_three').eq(i).html(str[i]);
                }   
            }else if(this.num==4){
               for(var i=0;i<$('.cell_list_white_four').length;i++){
                $('.cell_list_white_four').eq(i).html(str[i]);
                }   
            }else if(this.num==5){
               for(var i=0;i<$('.cell_list_white_five').length;i++){
                $('.cell_list_white_five').eq(i).html(str[i]);
                }   
            }else if(this.num==6){
               for(var i=0;i<$('.cell_list_white_six').length;i++){
                $('.cell_list_white_six').eq(i).html(str[i]);
                }   
            }else if(this.num==7){
               for(var i=0;i<$('.cell_list_white_seven').length;i++){
                $('.cell_list_white_seven').eq(i).html(str[i]);
                }   
            }
            
        } 
    },
    created(){
        this.getLife();
    },
    updated(){
        // this.$refs.input.focus();
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
.cell_box{
    width:100%;
    height: 5.6rem;
    padding-top:0.25rem;
    padding-left:0.01rem;
    box-sizing: border-box;
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
/* 输入框 */
.input_import_box{
    width:100%;
    line-height:0.4rem;
    overflow: hidden;
}
.prompt_title{
    width:100%;
    line-height:0.4rem;
    overflow: hidden;
    font-size:0.24rem;
    padding:0 0.2rem;
}
.submit_enter_answer{
    width:100%;
    height: 0.42rem;
    overflow: hidden;
    margin-top:0.1rem;
}
.input_import_zn{
    display: block;
    width:2rem;
    height: 0.4rem;
    line-height:0.4rem;
    border:0.01rem solid #333;
    margin-left:1.3rem;
    float:left;
    outline: none;
    font-size:0.24rem;
    padding-left:0.15rem;
}
.enter_answer{
    display: block;
    width:1.2rem;
    height: 0.4rem;
    float:left;
    margin-left:0.5rem;
    text-align: center;
    font-size:0.24rem;
    background: #333;
    color:#fff;
    border:0;
    outline: none;
    font-weight:bold;
}
.cell_box .cell_list_input_one{
    background: url('../../assets/images/background_num_01.png');
    background-size:cover;
}
.cell_box .cell_list_input_two{
    background: url('../../assets/images/background_num_02.png');
    background-size:cover;
}
.cell_box .cell_list_input_three{
    background: url('../../assets/images/background_num_03.png');
    background-size:cover;
}
.cell_box .cell_list_input_four{
    background: url('../../assets/images/background_num_04.png');
    background-size:cover;
}
.cell_box .cell_list_input_five{
    background: url('../../assets/images/background_num_05.png');
    background-size:cover;
}
.cell_box .cell_list_input_six{
    background: url('../../assets/images/background_num_06.png');
    background-size:cover;
}
.cell_box .cell_list_input_seven{
    background: url('../../assets/images/background_num_07.png');
    background-size:cover;
}
</style>
