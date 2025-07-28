<script setup>
import { ref } from "vue";
//let Operation = "";
let numbersToOperate = [];
const Arith = ["M", "D", "R", "S"];
let DataResult = 0;
let ScreenCalculator = ref("");
function collect(valor) {
  data = valor + "";
  ScreenCalculator.value = ScreenCalculator.value + data;
}

function Math_Basics(operation) {
  ScreenCalculator.value = parseInt(ScreenCalculator.value);
  if (!numbersToOperate.at(-1).includes(Arith)) {
    if (operation == "M") {
      numbersToOperate.push(ScreenCalculator.value);
      numbersToOperate.push("x");
      ScreenCalculator.value = 0;
    }
    if (operation == "D") {
      numbersToOperate.push(ScreenCalculator.value);
      numbersToOperate.push("/");
      ScreenCalculator.value = 0;
    }
    if (operation == "S") {
      numbersToOperate.push(ScreenCalculator.value);
      numbersToOperate.push("+");
      ScreenCalculator.value = 0;
    }
    if (operation == "R") {
      numbersToOperate.push(ScreenCalculator.value);
      numbersToOperate.push("-");
      ScreenCalculator.value = 0;
    }
  } else {
    console.log("agrega otro numero");
  }
}

function Result(){
  DataResult=numbersToOperate[0]
 
  numbersToOperate.forEach((element,index)=>{
     let I =numbersToOperate[index+1]
    if (I == "M") {
  
    }
    if (I == "D") {
    
    }
    if (I == "S") {
   
    }
    if (I == "R") {
  
    }
  
  })
}
//Result()
</script>

<template>
  <div class="Father">
    <main class="Calculator">
      <header class="Screen">{{ ScreenCalculator}}</header>
      <footer class="Buttons">
        <div class="numberButtons">
          <button v-on:click="function(){collect(0)}" style="border-radius:5px ; border:1px solid black" >0</button>
          <button value="C">C</button>
          <button v-on:click="function(){Math_Basics(`S`)}">+</button>
          <button style="border-radius:5px ; border:1px solid black" v-for="n in 9" :key="n" :value="n" v-on:click="function(){collect(n)}">{{ n }}</button>
        </div>
        <div class="operationsButtons">
          <button v-on:click="function(){Math_Basics(`D`)}">/</button>
          <button v-on:click="function(){Math_Basics(`M`)}">x</button>
          <button v-on:click="function(){Math_Basics(`R`)}">-</button>
          <button value="=">=</button>
        </div>
      </footer>
    </main> 
  </div>
</template>

<style scoped>
.Father {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
}

.Calculator {
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  padding: 2%;
  background: black;
  border-radius: 10px;
  width: 40%;
  height: 50%;
}
.Screen {
  background: white;
  border-radius: 10px;
  width: 100%;
  height: 20%;
}
.Buttons {
  display: flex;
  background: gray;
  border-radius: 10px;
  width: 100%;
  height: 75%;
}
.numberButtons {
  width: 75%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
}
.operationsButtons {
  width: 25%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
}
</style>