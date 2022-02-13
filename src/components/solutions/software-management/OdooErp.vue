<template>
  <div class="odoo-erp">
    <div class="land">
      <LandingComponent>
        ODOO <br />
        Enterprise Resource Planning (ERP)
      </LandingComponent>
    </div>
    <div class="container">
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";

export default {
  components: {},
  name: "odoo-erp",
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/software-management/ejaf-erp/erp.jpg");
  }
}
</style>
