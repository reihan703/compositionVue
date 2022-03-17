<template>
  <div v-if="error" class="error mt-3">
    {{error}}
  </div>
  <div v-if="tags.length" class="tags mt-3">
    <PostsList  :posts="tags" />
    <TagCloud :posts="posts"/>
  </div>
  <div v-else class="loading">
    <Spinner/>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import PostsList from '../components/PostsList.vue'
import TagCloud from '../components/TagCloud.vue'
import getPosts from '../composables/getPosts'
import { useRoute } from 'vue-router'
import {computed} from 'vue'

export default {
  components: { PostsList, Spinner, TagCloud, },
  setup(){
    const route = useRoute()

    const {posts, load, error} = getPosts()
    load()

    const tags = computed(()=>{
      return posts.value.filter((p)=>p.tags.includes(route.params.tag))
    })

    return{posts, error, tags}
  }
}
</script>

<style>

</style>