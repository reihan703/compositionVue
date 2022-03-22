<template>
  <h1>Real Data</h1>
  <div v-for="post in posts" :key="post.id">
    <div>{{post.title}}</div>
  </div>
</template>

<script>
import { projectFireStore } from '@/firebase/config'
import { ref } from '@vue/reactivity'
export default {
  setup(){
    const posts = ref([])

    projectFireStore.collection('post')
    .orderBy('created', 'desc')
    .onSnapshot((snap)=>{
      let docs = snap.docs.map(doc=>{
        return {...doc.data(), id:doc.id}
      })
      posts.value=docs
    })

    

    return{posts}
  }
}
</script>

<style>

</style>