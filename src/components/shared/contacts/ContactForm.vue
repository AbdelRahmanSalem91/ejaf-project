<template>
  <div class="contact-form px-3">
    <h2 class="text-capitalize form-title">drop us a line</h2>
    <form class="d-flex flex-column">
      <input
        id="email"
        type="email"
        class="p-2 my-3 rounded"
        placeholder="Email"
        required
      />
      <input
        id="phone"
        type="text"
        class="p-2 my-3 rounded"
        placeholder="Phone"
        required
      />
      <input
        id="subject"
        type="text"
        class="p-2 my-3 rounded"
        placeholder="Subject"
        required
      />
      <input
        id="message"
        type="text"
        class="p-2 my-3 rounded"
        placeholder="Message"
        required
      />
      <div class="terms d-flex align-items-start">
        <input type="checkbox" name="" id="agree" class="mt-2 me-3" />
        <label for="agree">
          I agree with the
          <a href="#">Terms of Use</a>
          and
          <a href="#">Privacy Policy</a>
          and I declare that I have read the information that is required in
          accordance with
          <a href="#">Article 13 of GDPR.</a>
        </label>
      </div>
      <div class="text-start mt-4">
        <button class="btn button" type="submit">Send Message</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "contact-form",
};
</script>

<style scoped>
.form-title {
  color: var(--green-color);
}
input {
  outline: none;
  border: 0;
}
.button {
  background-color: var(--green-color);
}
a {
  color: var(--red-color) !important;
}
</style>
