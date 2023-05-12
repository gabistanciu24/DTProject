<template>
      <div class="page">
        <h1 class="title">HEALTHX</h1>
        <div class="container">
            <div class="left">
              <h2>Signup</h2>
              <input type="text" id="username" name="username" placeholder="User">
              <input type="password" id="password" name="password" placeholder="password">
              <button>Signup</button>
              <a href="#" @click="redirecttoLogin">Already a member?</a>
              <a href="#" @click="redirecttoAddFood">Temporary AddFood Link</a>
              <a href="#" @click="redirecttoShowData">Temporary ShowData Link</a>
            </div>
            <div class="right">
              <span class="gender">
                <label for="gender">Gender</label>
                <div class="radio-buttons">
                  <label class="radio-button">
                    <input value="Male" name="gender" type="radio">
                    <div class="radio-circle"></div>
                    <span class="radio-label">Male</span>
                  </label>
                  <label class="radio-button">
                    <input value="Female" name="gender" type="radio">
                    <div class="radio-circle"></div>
                    <span class="radio-label">Female</span>
                  </label>
                </div>
                
              </span>
              <span class="exercise">
                <label for="exercise-level">Exercise level</label>
                <div class="radio-buttons">
                  <label class="radio-button">
                    <input value="0" name="exercise" type="radio">
                    <div class="radio-circle"></div>
                    <span class="radio-label">No exercise</span>
                  </label>
                  <label class="radio-button">
                    <input value="1" name="exercise" type="radio">
                    <div class="radio-circle"></div>
                    <span class="radio-label">1-3 times/week</span>
                  </label>
                  <label class="radio-button">
                    <input value="2" name="exercise" type="radio">
                    <div class="radio-circle"></div>
                    <span class="radio-label">4-5 times/week</span>
                  </label>
                  <label class="radio-button">
                    <input value="3" name="exercise" type="radio">
                    <div class="radio-circle"></div>
                    <span class="radio-label">6-7 times/week</span>
                  </label>
                </div>
                
              </span>
              <span class="info">
                <input type="number" id="height" name="height" placeholder="Height( cm )">
                <input type="number" id="weight" name="weight" placeholder="Weight( kg )">
                <input type="number" id="goal" name="goal" placeholder="Kcal goal">
              </span>
            </div>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    name: 'SignupPage',
    components: {
    },
    methods:{
      redirecttoLogin(){
        this.$router.push('login');
      },
      redirecttoAddFood(){
        this.$router.push('addfood');
      },
      redirecttoShowData(){
        this.$router.push('showdata');
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
  
  .right{
    display: flex;
    flex-direction: column;
    width:50%;
    height: 100%;
    justify-content: center;
    background-color: rgba(255,255,255,.1);
  }
  
  .gender,.exercise{
    text-align: start;
    width:21.8rem;
    font-size: 1.5rem;
    color:white;
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
  
  ::placeholder{
    color:#F97B22;
  }
  
  .radio-button {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
  }
  
  .radio-button input[type="radio"] {
    display: none;
  }
  
  .radio-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ffffff;
    position: relative;
    margin-right: 10px;
  }
  
  .radio-circle::before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ddd;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.2s ease-in-out;
  }
  
  .radio-button input[type="radio"]:checked + .radio-circle::before {
    transform: translate(-50%, -50%) scale(1);
  }
  
  .radio-button input[type="radio"]:checked + .radio-circle::before {
    background-color: #ff6600;
  }
  
  .radio-label {
    font-size: 1.3rem;
  }
  
  .radio-button:hover .radio-circle {
    border-color: #555;
  }
  
  .radio-button:hover input[type="radio"]:checked + .radio-circle::before {
    background-color: #555;
  }
  
  </style>
  