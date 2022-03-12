<template>
	<div class="home">
    
		<div class="container-fluid d-flex flex-column mx-auto my-auto">
			<!-- <p>my name is {{data.name}} and i am {{data.age}} years old</p>
			<input type="text" v-model="data.age" class="form-control my-3" id="exampleInputEmail1" aria-describedby="emailHelp">
      <a name="" id="" @click="clickBtn" class="btn btn-primary" href="#" role="button">Click here</a>
      <a name="" id="" @click="data.age++" class="btn btn-primary" href="#" role="button">Add age</a>
       -->

      <!-- <h3>refs</h3>
      <p>{{dataOne.age}} - {{dataOne.name}}</p>
      <a @click="updateDataOne" class="btn btn-primary" href="#" role="button">Update</a>
      <h3>reactive</h3>
      <p>{{dataTwo.age}} - {{dataTwo.name}} - {{nameTwo}}</p>
      <a @click="updateDataTwo" class="btn btn-primary" href="#" role="button">Update</a> -->

      <h3>Names</h3>
      <h5>search: </h5>
      <input type="text" v-model="search" class="form-control my-3 mx-auto w-50" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div v-for="name in nameMatch" :key="name">
        {{name}}
      </div>
      <a name="" id="" @click="handleClick" class="btn btn-primary" href="#" role="button">stop</a>
		</div>
	</div>
</template>

<script>
import { computed, reactive, ref, watch, watchEffect } from 'vue'

export default {
  name:'home',
  setup(){
    // const data = ref({age: 30, name:'Lola'})

    // const p = ref(null)

    // const clickBtn = ()=>{
    //   // console.log(p,p.value)
    //   // p.value.classList.add('test')
    //   // p.value.textContent="hello"
    //   // age.value = 35;
    //   // name.value="Budi"
    //   data.value.age=20
    // }
    // return{data, clickBtn, p}

    // const dataOne = ref({name:'Budi', age:20})
    // const dataTwo = reactive({name:'Anto', age:25})

    // const updateDataOne= ()=>{
    //   dataOne.value.name="Budiman"
    // }
    // const updateDataTwo= ()=>{
    //   dataTwo.name="Antonio"
    // }

    // return{dataTwo,dataOne, nameTwo, updateDataOne, updateDataTwo}
    const search = ref('')
    const names = ref(['budi','sumanto','anto','rosa'])

    const stopWatch= watch(search,()=>{
      console.log('watch')
    })

    const stopEffect= watchEffect(()=>{
      console.log('WE', search.value)
    })

    const nameMatch = computed(()=>{
      return names.value.filter((name)=>name.includes(search.value))
    })

    const handleClick = ()=>{
      stopWatch()
      stopEffect()
    }

    return{names, nameMatch, search, stopWatch, stopEffect, handleClick}
  }
}
</script>
