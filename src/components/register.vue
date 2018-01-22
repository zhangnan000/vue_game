<template>
  <div class="bg">
    <div class="box">
      <h1 class="logo"><img src="../assets/images/icon@2x.png" alt=""></h1>
      <div class="register">
        <input v-model="user.mobile" type="text" placeholder="Mobile Phone*">
        <input v-model="user.code" type="text" placeholder="Verification Code*">
        <a @click="handleGetCode" class="send-code" href="javascript:;">Send</a>
        <input v-model="user.password" type="password" placeholder="Password">
      </div>
    <a @click="handleRegister" class="create" href="javascript:;">Create Account</a>      
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        mobile:'',
        password: '',
        code:'',
        only:'',
      },
    }
  },
  created(){
    this.user.only = localStorage.getItem('only')
  },
  methods: {
    handleGetCode() {
      this.$axios.post(`http://m-api.tubatulu.com/send_verify_code`,{mobile:this.user.mobile}).then(
        ({data}) => {
          alert(data.msg)
        }
      )
    },
    handleRegister() {
      this.$axios.post(`http://m-api.tubatulu.com/register`,this.user).then(
        ({data}) => {
          alert(data.msg)
          if(data.status == -1) {
            return
          }
          this.$router.push('/download')
        }
      )
    }
  }
}
</script>

<style scoped>
  .bg {
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: url('../assets/images/bg@2x.png');
    background-size: 100% 100%;
  }
  .box {
    position: relative;
    width: 5.87rem;
    height: 5.14rem;
    background-image: url('../assets/images/bg_1@2x.png');
    background-size: 5.87rem 5.14rem;
    margin-top:3.8rem;
    margin-left: auto;
    margin-right: auto;
  }
  .logo{
    position: absolute;
    top:-0.2rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .logo img {
    display: block;
    width: 1.38rem;
  }
  .register {
    position: absolute;
    bottom:1.20rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    width: 4.5rem;
    height: 2rem;
  }
  .register input {
    outline: none;
    border: none;
    border-bottom: 0.01rem solid #000;
    width: 100%;
    height: 0.68rem;
  }
  .send-code {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    background-color: #f5f5f5;
    width: 1.3rem;
    height: 0.42rem;
    line-height: 0.42rem;
    font-size: 0.22rem;
    color:#777;
  }
  .create {
    position: absolute;
    bottom:-0.2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 2.14rem;
    height: 0.7rem;
    background-color: #000;
    color: #fff;
    font-size: 0.22rem;
    text-align: center;
    line-height: 0.7rem;
  }
</style>

