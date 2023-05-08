<template>
  <div class="wrapper">
    <div class="table">
      <h2>Diary food</h2>
      <input  class="diary-search" type="text" id="diaryfood" name="diaryfood" placeholder="Search for a food">
      <div class="table-wrapper"></div>
      <div class="table-wrapper-footer">
        <input  class="quantity-input" type="number" id="quantity" name="quantity" placeholder="Add quantity (grams)">
        <button class="add-quantity-button">Add to Diary</button>
      </div>
    </div>
    <div class="addfoodform">
      <h2>New food</h2>
      <div class="form-wrapper">
        <form>
          <input type="text" id="foodname" name="foodname" placeholder="Food name">
          <input type="text" id="protein" name="protein" placeholder="Protein">
          <input type="text" id="carbs" name="carbs" placeholder="Carbohydrates">
          <input type="text" id="fat" name="fat" placeholder="Fat">
          <input type="text" id="calories" name="calories" placeholder="Calories">
          <input type="text" id="grams" name="grams" placeholder="Grams">
          <button class="addfoodbutton">Add food</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.wrapper{
  width:100vw;
  height: 100vh;
  background-image: linear-gradient(to top, #9ca777, #93a175, #8b9c74, #839672, #7c9070);
  display: flex;
  justify-content: space-around;
}

.wrapper > .table,.addfoodform{
  height: 70rem;
  width: 70rem;
}

.table > h2{
  color:white;
  font-size:4rem;
  font-weight: 400;
  margin-bottom:2rem;
}

#diaryfood{
  background-color: #9CA777;
  color:white;
  height: 4rem;
}

#diaryfood::placeholder{
  color:white;
}

.table-wrapper-footer{
  width:100%;
  display: flex;
  justify-content: space-between;
}

.table-wrapper-footer > .add-quantity-button{
  width: 44%;
  margin-right:2.5rem;
}

.table-wrapper-footer > input[type=number]{
  width: 44%;
  margin-left:2.5rem;
}

.addfoodform > h2{
  color:white;
  font-size:4rem;
  font-weight: 400;
  margin-bottom:2rem;
}

.addfoodform > input[type=number],input[type=text]{
  width:93%;
  height: 4rem;
  margin:2rem 2rem;
}

.addfoodform > .form-wrapper{
  background-color: rgba(255,255,255,0.1);
}

.addfoodbutton{
  width:93%;
  height: 8rem;
  margin-bottom:2.5rem;
}
</style>