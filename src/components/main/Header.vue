<template>
  <nav class="main-header navbar navbar-expand bg-white navbar-light border-bottom">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" @click="toggleMenuSidebar">
          <font-awesome-icon icon="bars" />
        </a>
      </li>
    </ul>

    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link">
          <font-awesome-icon icon="power-off" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header",
  methods: {
    toggleMenuSidebar () {
      if (document.body.classList.contains("sidebar-open")) {
        document.body.classList.remove("sidebar-open")
        document.body.classList.add("sidebar-collapse")
      } else {
        document.body.classList.remove("sidebar-collapse")
        document.body.classList.add("sidebar-open")
      }
    },
  }
};
</script>

<style>
.nav-link {
  cursor: pointer;
}
</style>

