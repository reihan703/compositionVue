<template>
  <div v-for="post in posts" :key="post.id">
    <!-- <h3>{{post.title}}</h3> -->
    <SinglePost :post='post'/>
  </div>
</template>

<script>
import { onUpdated } from '@vue/runtime-core'
import SinglePost from './SinglePost.vue'
export default {
  props:['posts'],
  components:{SinglePost},
  setup(props){
    console.log(props.posts)

    onUpdated(()=>{
      console.log('updated')
    })
  }
}
</script>

<style>

</style>