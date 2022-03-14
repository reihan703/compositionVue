<template>
  <div v-if="error">{{error}}</div>
  <div v-if="post" class="post">
    <h3>{{post.title}}</h3>
    <p class="pre">{{post.body}}</p>
  </div>
  <div v-else>
    <Spinner/>
  </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'

export default {
  components:{Spinner},
  props:['id2'],
  setup(props){
    const{error, post, load}=getPost(props.id2)
    load()

    return{error, post}
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