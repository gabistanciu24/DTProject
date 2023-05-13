<template>
    <div class="page">
           <h2 class="quote">One day at a time, you’ll get there</h2>
           <div class="main-container">
               
                <h1>Calories</h1>
                <h2>Remaining</h2>

                <div class="down">
                  
                  <div class="mini-container">
                    <h3 class="macronutrients">Proteins</h3>
                  </div>
                  <div class="mini-container">
                    <h3 class="macronutrients">Carbohydrates</h3>
                  </div>
                  <div class="mini-container">
                    <h3 class="macronutrients">Fats</h3>
                  </div>
                </div>
           </div>
           <div class="diary">
               
           </div>
           <a href="#" @click="redirecttoAddFood">
            <button class="add">+</button>
           </a>
         </div></template>
   
   <script>
   export default {
    name: 'ShowData',
    components: {
    },
    methods:{
      redirecttoAddFood(){
        this.$router.push('addfood');
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
     
     .quote{
       font-weight: 400;
       color:white;
       font-size: 2rem;
       margin-bottom: 3rem;
     }
     
     .main-container{
       position: relative;
       margin-top:1rem;
       text-align: center;
       width:54.31rem;
       height: 31.06rem;
       background-color:#7C9070;
       justify-content: center;
     }

     .main-container > h1 {
       font-weight: 400;
       color:white;
       font-size: 4rem;
       margin-bottom: 1rem;
       margin-top: 2rem;
     }
     .main-container > h2 {
       color:white;
       font-size:2rem;
       font-weight: 200;
       margin-bottom:2rem;
     }

     .down {
       position: absolute;
       bottom: 0;
       display: flex;
       margin-top:1rem;
       text-align: center;
       width:54.31rem;
       height: 12.42rem;
       background-color:#7C9070;
       justify-content: center;
     }

     .down > .mini-container {
       justify-content: center;
       width:15.1rem;
       height: 12.42rem;
       margin-left: 1.5rem;
       margin-right: 1.5rem;
     }

     .down > .mini-container > .macronutrients {
       color:white;
       font-size:2rem;
       font-weight: 200;
       margin-bottom:2rem;
     }

     .diary{
       margin-top:2rem;
       text-align: center;
       display: flex;
       width:54.31rem;
       height: 15.06rem;
       background-color:#7C9070;
     }

     .add {
      position: fixed;
      bottom: 1.5rem;
      right: 1.5rem;
      height: 6.25rem;
      width: 6.25rem;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
      background-color:white;
      border-radius: 3.125rem;
      justify-content: center;
      color: #F97B22;
      font-size: 4.3rem;
      }

     a{
      text-decoration: none;
    }
     
   </style>