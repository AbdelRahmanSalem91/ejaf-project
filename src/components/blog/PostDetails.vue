<template>
  <div class="container mt-5 pt-5">
    <div class="blog-header py-5 my-5">
      <h2 class="h1 text-center fw-bolder">Blog</h2>
      <div class="text-center">
        <i class="fa-solid fa-house-chimney"></i> /
        <router-link to="/" class="text-white">HOME</router-link> /
        <router-link to="/blog">BLOG</router-link> /
        <span>{{ title }}</span>
      </div>
    </div>
    <div class="row pt-5 mt-5">
      <div class="post col-lg-8">
        <post-details-comp :post="posts[Number(id)]" />
      </div>
    </div>
    <blog-aside class="col-lg-4" />
    <div class="button d-flex justify-content-between w-75 mb-5">
      <button class="btn" @click.prevent="prev" v-if="id > 0">
        <i class="fa-solid fa-chevron-left"></i>
        Prev
      </button>
      <button
        class="btn next"
        @click.prevent="next"
        v-if="id + 1 < posts.length"
      >
        Next
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import PostDetailsComp from "./PostDetailsComp.vue";
import Posts from "./Posts";

export default {
  components: { PostDetailsComp },
  name: "post-details",
  data() {
    return {
      posts: Posts,
      id: "",
      post: "",
      title: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.posts.filter((post) => {
      if (this.id === post.id) {
        this.post = post;
        this.title = post.title;
      }
    });
  },
  methods: {
    next() {
      if (this.id < this.posts.length) {
        console.log(this.posts.length);
        this.id++;
        console.log(this.id);
        this.$router.push("/blog/" + this.id);
      }
    },
    prev() {
      if (this.id > 0) {
        this.id--;
        this.$router.push("/blog/" + this.id);
      }
    },
  },
};
</script>

<style scoped>
button {
  padding: 5px 18px !important;
  background-color: var(--red-color);
  color: #fff;
  border-radius: 50px;
  border: 0 !important;
  outline: none !important;
}
button.next {
  margin-left: auto;
}
button:hover {
  color: #fff;
}
</style>
