<template>
  <div class="card w-100 border-0 post-card">
    <router-link to="/">
      <img
        :src="require('../../assets/home/blog/' + post.img)"
        class="card-img-top"
        :alt="post.title"
      />
    </router-link>
    <div class="card-body px-0 py-4">
      <router-link :to="`/blog/${post.title}`">
        <h2 class="card-title post-title">{{ post.title }}</h2>
      </router-link>
      <div class="post-info d-flex">
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
      <p class="card-text">
        {{ post.desc }}
      </p>
      <router-link to="/" class="read-more">Read more ...</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "post-component",
  props: ["post"],
};
</script>

<style scoped>
.post-card {
  background-color: transparent !important;
}
.read-more,
.post-title {
  color: #000 !important;
  font-weight: bolder !important;
}
.blog-link {
  color: var(--red-color) !important;
}
</style>
