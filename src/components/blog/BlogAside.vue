<template>
  <div class="popular-posts">
    <input
      type="text"
      name="search"
      placeholder="Search..."
      class="w-100 p-2 border-0 mb-5"
    />
    <h2 class="text-white">Popular Posts</h2>
    <div class="popular-post row my-3" v-for="post in posts" :key="post.id">
      <div class="col-4 img">
        <router-link :to="`/blog/${post.id}`">
          <img
            class="w-100"
            :src="require('../../assets/home/blog/' + post.img)"
            :alt="post.title"
          />
        </router-link>
      </div>
      <div class="col-8 link">
        <router-link :to="`/blog/${post.id}`">
          <h6 class="title">
            {{ post.title }}
          </h6>
        </router-link>
        <small class="date">
          {{ post.date }}
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import Posts from "./Posts";

export default {
  name: "blog-aside",
  data() {
    return {
      posts: Posts,
    };
  },
};
</script>

<style scoped>
.popular-posts input {
  outline: 0;
  border-radius: 3px;
}
h6.title {
  transition: all 0.3s;
}
h6.title:hover {
  color: var(--red-color);
}
</style>
