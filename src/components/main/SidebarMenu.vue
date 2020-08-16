<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <router-link to="/" class="brand-link">
      <img
        src="./../../assets/img/logo.png"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: .8"
      />
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            src="./../../assets/img/default-user.png"
            class="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div class="info">
          <router-link to="/profile" class="d-block">Angga Nurhiman</router-link>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
          with font-awesome or any other icon font library-->

          <li class="nav-item has-treeview">
            <router-link to="/" class="nav-link">
              <font-awesome-icon icon="th" class="nav-icon" />
              <p>Dashboard</p>
            </router-link>
          </li>
          <li class="nav-item has-treeview">
            <router-link to="/user-list" class="nav-link">
              <font-awesome-icon icon="users" class="nav-icon" />
              <p>User List</p>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: "SidebarMenu",
  data () {
    return {
    };
  },
  methods: {
  }
};
</script>

<style>
</style>