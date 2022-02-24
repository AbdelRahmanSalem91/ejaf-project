<template>
  <section class="blog mt-5 pt-5">
    <div class="row justify-content-around">
      <div
        class="card bg-transparent blog__card col-12 col-md-4 border-0"
        v-for="(post, index) in posts"
        :key="index"
      >
        <template v-if="index < 3">
          <router-link :to="`/blog/${post.id}`">
            <img
              :src="require('../../../assets/home/blog/' + post.img)"
              class="card-img-top"
              alt="Ejaf ERP"
            />
          </router-link>
          <div class="card-body px-0">
            <h5 class="card-title">
              <router-link :to="`/blog/${post.id}`"
                >{{ post.title }}
              </router-link>
            </h5>
            <small class="my-3 d-block"
              >{{ post.date }}
              <strong><router-link to="/blog">Blog</router-link></strong></small
            >
            <p class="card-text">
              {{ post.desc }}
            </p>
            <router-link :to="`/blog/${post.id}`">Read More</router-link>
          </div>
        </template>
      </div>
    </div>
    <div class="text-center my-5 py-5 col-8 mx-auto">
      <img
        src="../../../assets/logo.png"
        alt="Ejaf Technology"
        class="logo w-75"
      />
    </div>
  </section>
</template>

<script>
import Posts from "../../blog/Posts";

export default {
  name: "blog-section",
  data() {
    return {
      posts: Posts,
    };
  },
};
</script>

<style scoped>
small {
  font-size: 12px;
}
a {
  color: var(--red-color) !important;
}
@media (min-width: 991px) {
  .blog .logo {
    max-width: 50% !important;
  }
}
</style>
