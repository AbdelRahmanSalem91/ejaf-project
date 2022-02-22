<template>
  <section class="blog mt-5 pt-5">
    <div class="row justify-content-around">
      <div class="card bg-transparent blog__card col-12 col-md-4 border-0">
        <router-link to="/blog/enterprise-resource-planning">
          <img
            src="../../../assets/home/blog/EJAF_ERP3.jpg"
            class="card-img-top"
            alt="Ejaf ERP"
          />
        </router-link>
        <div class="card-body px-0">
          <h5 class="card-title">
            <router-link to="/blog/enterprise-resource-planning"
              >Proven Enterprise resource planning (ERP) Solutions in Iraq 2022
            </router-link>
          </h5>
          <small class="my-3 d-block"
            >28 January 2022
            <strong><router-link to="/blog">Blog</router-link></strong></small
          >
          <p class="card-text">
            Proven Enterprise resource planning (ERP) Solutions in Iraq 2022 In
            the last decade, ERP systems have become a vital part of any
            company’s ability to function and grow. ERP systems are typically
            desi...
          </p>
          <router-link to="/blog/enterprise-resource-planning"
            >Read More</router-link
          >
        </div>
      </div>
      <div class="card bg-transparent blog__card col-12 col-md-4 border-0">
        <router-link to="/blog/enterprise-solutions-provider">
          <img
            src="../../../assets/home/blog/enterprise__Solutions.jpg"
            class="card-img-top"
            alt="Enterprise Solutions"
          />
        </router-link>
        <div class="card-body px-0">
          <h5 class="card-title">
            <router-link to="/blog/enterprise-solutions-provider">
              Best Enterprise Solutions Provider in Iraq
            </router-link>
          </h5>
          <small class="my-3 d-block"
            >20 October 2021
            <strong
              ><router-link to="/blog/enterprise-solutions-provider"
                >Blog</router-link
              ></strong
            ></small
          >
          <p class="card-text">
            Best Enterprise Solutions Provider in Iraq EjafTech enterprise
            solutions are designed to support the digital transformation of
            enterprises across the world. It has released a wide range of
            products i...
          </p>
          <router-link to="/blog/enterprise-solutions-provider"
            >Read More</router-link
          >
        </div>
      </div>
      <div class="card bg-transparent blog__card col-12 col-md-4 border-0">
        <router-link to="/blog/hosting-solutions">
          <img
            src="../../../assets/home/blog/Hosting_Solutions-min.jpg"
            class="card-img-top"
            alt="Hosting Solutions"
          />
        </router-link>
        <div class="card-body px-0">
          <h5 class="card-title">
            <router-link to="/blog/hosting-solutions">
              Hosting Solutions in Iraq
            </router-link>
          </h5>
          <small class="my-3 d-block"
            >12 July 2021
            <strong
              ><router-link to="/blog/hosting-solutions"
                >Blog</router-link
              ></strong
            ></small
          >
          <p class="card-text">
            Hosting Solutions in Iraq What is hosting service ? Whether you rely
            on the hosting of your data and communications services OUR Cloud,
            want to share in our infrastructure to deliver business servic...
          </p>
          <router-link to="/blog/hosting-solutions">Read More</router-link>
        </div>
      </div>
    </div>
    <div class="text-center my-5 py-5 col-8 mx-auto">
      <img src="../../../assets/logo.png" alt="Ejaf Technology" class="logo" />
    </div>
  </section>
</template>

<script>
export default {
  name: "blog-section",
};
</script>

<style scoped>
small {
  font-size: 12px;
}
a {
  color: var(--red-color) !important;
}
.blog .logo {
  width: 50%;
}
@media (max-width: 991px) {
  .blog .logo {
    max-width: 80%;
  }
}
</style>
