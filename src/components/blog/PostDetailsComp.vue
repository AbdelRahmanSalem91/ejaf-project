<template>
  <div class="post-header d-flex">
    <small>
      <i class="fa-regular fa-folder-open mx-1"></i>
      <router-link to="/blog" class="blog-link">Blog</router-link>
    </small>
    <small class="mx-3">
      <i class="fa-regular fa-calendar mx-1"></i>
      {{ post.date }}
    </small>
  </div>
  <hr class="bg-white" />
  <div class="post-details">
    <div class="img-container">
      <img
        :src="require('../../assets/home/blog/' + post.img)"
        class="mt-2 w-100"
        :alt="post.title"
      />
    </div>
    <div class="post-desc">
      <h2 class="title h1 my-4">{{ post.title }}</h2>
      <p class="desc">{{ post.desc }}</p>
      <template v-for="(article, index) in post.articles" :key="index">
        <h3 class="article-head my-4">{{ article.q }}</h3>
        <p class="article-desc">{{ article.a }}</p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "post-details-component",
  props: ["post"],
};
</script>

<style scoped>
.blog-link {
  color: var(--red-color) !important;
}
</style>
