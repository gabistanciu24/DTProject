<template>
 <div class="page">
        <h1 class="title">HEALTHX</h1>
        <div class="container">
            <div class="left">
              <h2>Login</h2>
              <input type="text" id="username" name="username" placeholder="User">
              <input type="password" id="password" name="password" placeholder="password">
              <button>Login</button>
              <a href="#" @click="redirecttoSignup">Already a member?</a>
            </div>
            <div class="right_L">
              <div class = "strip">
                <h2>Fuel your body with knowledge.</h2> 
              </div>
            </div>
        </div>
      </div></template>

<script>
export default {
  name: 'LoginPage',
    components: {
    },
    methods:{
      redirecttoSignup(){
        this.$router.push('/');
      }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
  *{
    margin: 0;
    padding:0;
    font-family: 'Poppins',sans-serif;
    text-align: center;
    align-items: center;
  }
  
  .page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: linear-gradient(to top, #9ca777, #93a175, #8b9c74, #839672, #7c9070);
    width:100vw;
    height: 100vh;
  }
  
  .title{
    font-weight: 500;
    color:white;
    font-size: 8rem;
  }
  
  .container{
    margin-top:1rem;
    text-align: center;
    display: flex;
    width:72.31rem;
    height: 38.06rem;
  }
  
  .left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:50%;
    height: 100%;
    background-color:#7C9070;
  }
  
  .left > h2{
    color:white;
    font-weight: 400;
    font-size: 4rem;
  }
  
  .right_L{
    display: flex;
    flex-direction: column;
    width:50%;
    height: 100%;
    justify-content: center;
    background-image: url(../assets/oute.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    object-fit: contain;
  }


  .right_L > img{  
    position: relative;
    width:72.31rem;

  }

  .right_L > .strip{
    background-color: rgba(0,0,0, 0.25);
    width: 100%;
    height: 100%;
  }

  .right_L > .strip > h2{
    color:white;
    font-weight: 400;
    font-size: 3rem;
    margin-top: 40%;
  }

  input[type=text],input[type=password],input[type=number]{
    width:21.8rem;
    height: 2.93rem;
    font-size:2rem;
    border:none;
    background-color: #FEE8B0;
    color:#F97B22;
    margin-top:1.5rem;
  }
  
  button{
    width:21.8rem;
    height: 2.93rem;
    margin-top:1.5rem;
    background-color: #F97B22;
    color:white;
    font-size: 1.9rem;
    border:none;
    cursor: pointer;
  }
  
  a{
    margin-top:1.5rem;
    text-decoration: none;
    color:white;
    font-size: 1.25rem;
  }
</style>