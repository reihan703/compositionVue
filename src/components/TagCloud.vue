<template>
  <div class="tag-cloud">
    <h3>TAGS</h3>
    <div v-for="tag in tags" :key="tag" class="tags">
      <router-link  :to="{name: 'tags', params:{tag:tag}}">
        #{{tag}}
      </router-link>
    </div>
    
  </div>
</template>

<script>
import TagsCloud from '../composables/TagsCloud'
export default {
  props:['posts'],
  setup(props){
    const {tags} = TagsCloud(props.posts)
    return {tags}
  },
}
</script>

<style>
  .tag-cloud {
    padding: 10px;
  }
  .tag-cloud h3 {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
  }
  .tag-cloud div {
    display: inline-block;
    padding: 10px;
  }
  .tag-cloud a {
    color: #ccc;
    text-decoration: none;
  }
  .tag-cloud a.router-link-active {
    color: #22bd51;
    font-weight: bold;
  }
</style>