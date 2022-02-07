<template>
  <div class="contact-form w-50">
    <h2 class="text-capitalize form-title">drop us a line</h2>
    <b-form>
      <b-form-input
        id="email"
        type="email"
        placeholder="Email"
        required
      ></b-form-input>
      <b-form-input
        id="phone"
        type="text"
        placeholder="Phone"
        required
      ></b-form-input>
      <b-form-input
        id="subject"
        type="text"
        placeholder="Subject"
        required
      ></b-form-input>
      <b-form-input
        id="message"
        type="text"
        placeholder="Message"
        required
      ></b-form-input>

      <b-button class="button" type="submit">Send Message</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "contact-form",
};
</script>

<style>
.form-title {
  color: var(--green-color);
}
.button {
  background-color: var(--green-color);
}
</style>
