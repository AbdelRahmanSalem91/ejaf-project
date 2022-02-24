<template>
  <div class="container">
    <div class="blog-posts row mt-5 pt-5">
      <div class="blog-header py-5 my-5">
        <h2 class="h1 text-center fw-bolder">Blog</h2>
        <div class="text-center">
          <i class="fa-solid fa-house-chimney"></i> /
          <router-link to="/" class="text-white">HOME</router-link> /
          <span>BLOG</span>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="post" v-for="post in posts" :key="post.id">
            <post-comp :post="post" />
          </div>
        </div>
        <blog-aside class="col-lg-4" :posts="posts" />
      </div>
    </div>
  </div>
</template>

<script>
import PostComp from "./PostComp.vue";
import Posts from "./Posts";
import BlogAside from "./BlogAside.vue";
export default {
  name: "blog-component",
  components: {
    PostComp,
    BlogAside,
  },
  data() {
    return {
      posts: Posts,
    };
  },
};
</script>
