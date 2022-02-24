<template>
  <div class="login-page">
    <div class="top-bg"></div>
    <div class="login-section py-3 px-3">
      <img
        src="../../assets/logo.png"
        alt="Logo"
        class="logo w-75 d-block mx-auto"
      />
      <div class="row">
        <div class="red mt-3 col-3"></div>
        <div class="green mt-3 col-3"></div>
        <div class="blue mt-3 col-3"></div>
        <div class="yellow mt-3 col-3"></div>

        <form class="login-form mt-4">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"
              ><i class="fa-solid fa-user"></i
            ></span>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"
              ><i class="fa-solid fa-lock"></i
            ></span>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
            />
          </div>
          <div
            class="remember d-flex align-items-center justify-content-between"
          >
            <div class="d-flex align-items-center">
              <input
                class="form-check-input mt-0"
                type="checkbox"
                aria-label="remember"
                id="remember"
                name="remember"
              />
              <label for="remember" class="mx-2">Keep me signed in</label>
            </div>
            <a href="#" class="forgot">Forgot Password?</a>
          </div>
          <button
            class="btn text-white w-100 mt-3"
            @click.prevent="handleLogin"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login-component",
  methods: {
    handleLogin() {
      console.log("clicked");
    },
  },
};
</script>

<style scoped>
.login-page {
  position: relative;
  height: 100vh;
  background-image: url("../../assets/login/login-bg.png");
}
.login-page .top-bg {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/login/login-bg-top.png");
  background-repeat: repeat-x;
  position: absolute;
  top: 0;
  left: 0;
}
.login-page .login-section {
  width: 400px;
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border-radius: 2px;
}
.login-page .logo {
  height: 60px;
}
.login-page .red {
  background-color: var(--red-color);
  height: 3px;
  margin-right: 2px;
  width: 24.5%;
}
.login-page .green {
  background-color: var(--green-color);
  height: 3px;
  margin-right: 2px;
  width: 24.5%;
}
.login-page .blue {
  background-color: #0c78b7;
  height: 3px;
  margin-right: 2px;
  width: 24.5%;
}
.login-page .yellow {
  background-color: var(--yellow-color);
  height: 3px;
  width: 24.5%;
}
.login-page label {
  color: #000;
}
.login-page .forgot {
  color: #0c78b7 !important;
  text-decoration: underline !important;
}
.login-page button {
  background-color: #428bca;
}
.nav {
  visibility: hidden !important;
}
</style>
