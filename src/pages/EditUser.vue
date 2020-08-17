<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Edit User</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to='/'>Home</router-link>
              </li>
              <li class="breadcrumb-item active">
                <router-link to='/user-list'>User List</router-link>
              </li>
              <li class="breadcrumb-item active">
                Edit User
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <section class="content">
      <div class="container-fluid">
        <div class="card">
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" v-model="selectedUser.name">
              </div>
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" v-model="selectedUser.username">
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email" v-model="selectedUser.email">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="text" class="form-control" id="phone" v-model="selectedUser.phone">
                  </div>
                </div>
              </div>
              <button class="btn btn-outline-warning mr-2" @click="$router.push('/user-list')">Cancel</button>
              <button class="btn btn-primary" @click.prevent="submitForm">Submit</button>
              <div class="spinner-border text-primary ml-2" role="status" v-if="loadingEdit">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="alert alert-success mt-4 d-flex flex-row justify-content-between" role="alert" v-if="alertSuccess">
                <p>Successfully edited user.</p>
                <div>
                  <button type="button" class="btn btn-primary" @click.prevent="$router.push('/user-list')">Back to user list page</button>
                </div>
              </div>
              <div class="alert alert-danger mt-4 d-flex flex-row justify-content-between" role="alert" v-if="alertFailed">
                <p>System error. Please contact administrator.</p>
                <font-awesome-icon icon="window-close" class="pointer" @click="alertFailed = false" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('user')

export default {
  data () {
    return {
      // name: null,
      // username: null,
      // email: null,
      // phone: null,
      loadingEdit: false,
      alertSuccess: false,
      alertFailed: false
    }
  },
  computed: {
    ...mapState({
      selectedUser: state => state.selectedUser
    })
  },
  methods: {
    submitForm () {
      this.loadingEdit = true
      let allData = JSON.stringify({
        name: this.selectedUser.name,
        username: this.selectedUser.username,
        email: this.selectedUser.email,
        phone: this.selectedUser.phone
      })

      this.$store.commit('user/SET_SELECTED_ID', this.selectedUser.id)
      this.$store.commit('user/SET_DATA_USER', allData)
      this.$store.dispatch('user/editUser')
        .then(response => {
          this.alertSuccess = true
          this.loadingEdit = false
        }).catch((error) => {
          this.alertFailed = true
          this.loadingEdit = false
        })
    } 
  }
}
</script>
