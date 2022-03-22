<template>
  <div v-if="error">{{error}}</div>
  <div v-if="post" class="post">
    <h3>{{post.title}}</h3>
    <p class="pre">{{post.body}}</p>
    <a class="btn btn-danger btn-sm text-white "  @click="handleClick" href="#" role="button"> Delete </a>
    <!-- <a class="btn btn-outline-danger btn-sm text-black " @click="handleClick" href="#" role="button"> Delete</a> -->
  </div>
  <div v-else>
    <Spinner/>
  </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
import { useRoute, useRouter } from 'vue-router'
import { projectFireStore } from '@/firebase/config'

export default {
  components:{Spinner},
  props:['id2'],
  setup(props){
    const route = useRoute()
    const router = useRouter()

    const{error, post, load}=getPost(route.params.id2)
    load()

    const handleClick = async()=>{
      await projectFireStore.collection('post').doc(props.id2).delete()
      router.push({name:"home"})
    }

    return{error, post, handleClick}
  }
}
</script>

<style>
  .post{
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p{
   line-height: 1.5em;
   margin-top: 40px;
 }
 .pre{
   white-space: pre-wrap;
 }
</style>